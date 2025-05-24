import fs from 'fs';
import path from 'path';

export default function extractCSSVars(options = {}) {
  const {
    inputFiles = [],
    outputPath = './dist/variables.css',
    format = 'both', // 'root' | 'theme' | 'both'
  } = options;

  let collectedVars = new Map();

  return {
    name: 'extract-css-vars',

    // Обрабатываем CSS файлы на этапе трансформации
    transform(code, id) {
      // Проверяем, является ли файл одним из входных CSS файлов
      const shouldProcess = inputFiles.some(file => id.includes(file) || id.endsWith(file));

      if (shouldProcess && id.endsWith('.css')) {
        // Извлекаем переменные из @theme блоков
        const themeRegex = /:host\s*{([^}]+)}/g;
        let match;

        while ((match = themeRegex.exec(code)) !== null) {
          const content = match[1];
          // Парсим CSS переменные
          const varRegex = /(--[\w-]+):\s*([^;]+);/g;
          let varMatch;
          while ((varMatch = varRegex.exec(content)) !== null) {
            collectedVars.set(varMatch[1], varMatch[2].trim());
          }
        }
      }

      return null; // Не модифицируем код
    },

    // Генерируем файл после сборки
    generateBundle() {
      if (collectedVars.size === 0) return;

      let content = '';

      // Генерируем контент в зависимости от формата
      if (format === 'root' || format === 'both') {
        content += ':root {\n';
        collectedVars.forEach((value, prop) => {
          content += `  ${prop}: ${value};\n`;
        });
        content += '}\n\n';
      }

      if (format === 'theme' || format === 'both') {
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
    },

    // Альтернативный вариант - записать файл напрямую
    writeBundle() {
      if (collectedVars.size === 0) return;

      let content = '';

      if (format === 'root' || format === 'both') {
        content += ':root {\n';
        collectedVars.forEach((value, prop) => {
          content += `  ${prop}: ${value};\n`;
        });
        content += '}\n\n';
      }

      if (format === 'theme' || format === 'both') {
        content += '@theme {\n';
        collectedVars.forEach((value, prop) => {
          content += `  ${prop}: ${value};\n`;
        });
        content += '}\n';
      }

      // Создаем директорию если не существует
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Записываем файл
      fs.writeFileSync(outputPath, content);
      console.log(`✅ CSS variables extracted to ${outputPath}`);
    },
  };
}
