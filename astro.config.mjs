import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // адаптер для Vercel

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    server: {
      fs: {
        allow: ['public'] // разрешаем доступ к папке public
      }
    }
  }
});
