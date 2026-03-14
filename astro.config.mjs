import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jraftcreative.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap({
    filter: (page) => !page.includes('/service-page/') && !page.includes('/portfolio/') && !page.includes('/thank-you/'),
  })],
});
