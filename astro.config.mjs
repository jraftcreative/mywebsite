import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jraftcreative.com',
  output: 'static',
  redirects: {
    '/services': '/#services',
    '/services/': '/#services',
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/service-page/') && !page.includes('/portfolio/') && !page.includes('/thank-you/') && !page.includes('/services/#') && page !== 'https://jraftcreative.com/services/',
  })],
});
