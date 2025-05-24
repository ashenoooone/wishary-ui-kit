import fs from 'fs';
import path from 'path';

export default function extractCSSVars(options = {}) {
  const {
    inputFiles = [],
    outputPath = './dist/variables.css',
    format = 'root', // 'root' | 'theme' | 'both'
  } = options;

  let collectedVars = new Map();

  return {
    name: 'extract-css-vars',
    enforce: 'pre',

    buildStart() {
      inputFiles.forEach(file => {
        const fullPath = path.resolve(process.cwd(), file);
        if (fs.existsSync(fullPath)) {
          this.addWatchFile(fullPath);
          const content = fs.readFileSync(fullPath, 'utf-8');

          // Рекурсивно обрабатываем импорты
          const processFile = (filePath, fileContent) => {
            // Извлекаем @theme блоки
            const themeRegex = /@theme\s*{([^}]+)}/g;
            let match;

            while ((match = themeRegex.exec(fileContent)) !== null) {
              const themeContent = match[1];
              const varRegex = /(--[\w-]+):\s*([^;]+);/g;
              let varMatch;

              while ((varMatch = varRegex.exec(themeContent)) !== null) {
                collectedVars.set(varMatch[1], varMatch[2].trim());
              }
            }

            // Обрабатываем импорты
            const importRegex = /@import\s+['"]([^'"]+)['"]/g;
            let importMatch;

            while ((importMatch = importRegex.exec(fileContent)) !== null) {
              const importPath = importMatch[1];
              if (importPath.endsWith('.css') && !importPath.includes('tailwindcss')) {
                const resolvedPath = path.resolve(path.dirname(filePath), importPath);
                if (fs.existsSync(resolvedPath)) {
                  this.addWatchFile(resolvedPath);
                  const importContent = fs.readFileSync(resolvedPath, 'utf-8');
                  processFile(resolvedPath, importContent);
                }
              }
            }
          };

          processFile(fullPath, content);
        }
      });
    },

    // Генерируем файл после сборки
    generateBundle() {
      if (collectedVars.size === 0) {
        console.warn('⚠️  No CSS variables found in @theme blocks');
        return;
      }

      let content = '';

      // Генерируем контент в зависимости от формата
      if (format === 'root' || format === 'both') {
        content += '/* Generated CSS Variables from @theme blocks */\n';
        content += ':root {\n';
        collectedVars.forEach((value, prop) => {
          content += `  ${prop}: ${value};\n`;
        });
        content += '}\n\n';
      }

      if (format === 'theme' || format === 'both') {
        content += '/* Original @theme format */\n';
        content += '@theme {\n';
        collectedVars.forEach((value, prop) => {
          content += `  ${prop}: ${value};\n`;
        });
        content += '}\n';
      }

      // Эмитим файл как ассет
      this.emitFile({
        type: 'asset',
        fileName: path.basename(outputPath),
        source: content,
      });

      console.log(
        `✅ Extracted ${collectedVars.size} CSS variables to ${path.basename(outputPath)}`,
      );
    },
  };
}
