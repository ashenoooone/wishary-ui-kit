import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path, { extname, relative } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import tailwindcss from '@tailwindcss/vite';

const entries = Object.fromEntries(
  glob
    .sync('src/components/**/*.{ts,tsx}', {
      ignore: ['**/*.stories.tsx', '**/*.stories.ts'],
    })
    .map(file => [
      relative('src/components', file.slice(0, file.length - extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
);

const outputBase = {
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    clsx: 'clsx',
    'tailwind-merge': 'tailwind-merge',
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: './dist',
    ssr: true,
    copyPublicDir: false,
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      external: ['react', 'react-dom', 'clsx', 'tailwind-merge'],
      input: entries,
      output: [
        {
          ...outputBase,
          exports: 'named',
          format: 'cjs',
          esModule: true,
        },
        {
          ...outputBase,
          exports: 'named',
          format: 'esm',
          interop: 'esModule',
        },
      ],
      plugins: [],
    },
  },
});
