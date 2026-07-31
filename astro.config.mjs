import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://limebrothers.co',
  output: 'static',
  prefetch: true,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },
  },
});
