import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jraftcreative.com',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.includes('/service-page/') && !page.includes('/portfolio/') && !page.includes('/thank-you/'),
  })],
});
