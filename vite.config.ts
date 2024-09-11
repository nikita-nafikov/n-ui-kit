import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: '/n-ui-kit/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'nuikit',
      fileName: format => `nuikit.${format}.ts`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts(
      { insertTypesEntry: true },
    ),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
