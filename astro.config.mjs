import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Salida 100% estática (por defecto) → dist/, lista para Vercel
export default defineConfig({
  site: 'https://cerrajeriasos24.com',
  output: 'static',
  integrations: [sitemap()],
});