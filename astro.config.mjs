// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vega-vega.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
  vite: {
    build: {
      // Keep scripts as external files so the CSP can stay strict
      // (script-src 'self', no 'unsafe-inline')
      assetsInlineLimit: 0,
    },
  },
});
