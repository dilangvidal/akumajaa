// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // REEMPLAZAR: dominio real. Astro lo usa para el sitemap y las URL absolutas.
  site: 'https://akumajaa.com',

  build: {
    // Mantiene el CSS en archivos propios en vez de incrustarlo en el HTML, para que
    // la politica de seguridad pueda exigir style-src 'self' sin 'unsafe-inline'.
    inlineStylesheets: 'never',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
