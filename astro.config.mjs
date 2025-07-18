import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // серверная сборка для API-роутов

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
