import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite';
import extractCSSVars from './plugins/extractCSSVars.plugin.js';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@wishary/ui-kit',
      fileName: format => `@wishary/ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    react(),
    extractCSSVars({
      inputFiles: ['src/styles/main.css'],
      outputPath: './dist/variables.css',
      format: 'both',
    }),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
    }),
  ],
});
