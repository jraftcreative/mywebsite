import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Build-time timestamp for sitemap <lastmod>. Google accepts the build
// date as a valid lastmod signal — far better than emitting no lastmod.
const BUILD_LASTMOD = new Date().toISOString();

export default defineConfig({
  site: 'https://jraftcreative.com',
  output: 'static',
  redirects: {
    '/services': '/#services',
    '/services/': '/#services',
    // SEO cannibalisation fixes (Ben audit C4) — legacy landing pages
    // 301 to canonical service hubs so we stop splitting rankings.
    '/seo-services-singapore': '/services/seo-performance/',
    '/seo-services-singapore/': '/services/seo-performance/',
    '/web-design-singapore': '/services/website-development/',
    '/web-design-singapore/': '/services/website-development/',
    '/social-media-marketing-singapore': '/services/social-media/',
    '/social-media-marketing-singapore/': '/services/social-media/',
  },
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/service-page/') &&
      !page.includes('/portfolio/') &&
      !page.includes('/thank-you/') &&
      !page.includes('/services/#') &&
      !page.includes('/about-preview/') &&
      !page.includes('/_preview-') &&
      page !== 'https://jraftcreative.com/services/' &&
      // Exclude cannibalisation-redirect source URLs from sitemap.
      page !== 'https://jraftcreative.com/seo-services-singapore/' &&
      page !== 'https://jraftcreative.com/web-design-singapore/' &&
      page !== 'https://jraftcreative.com/social-media-marketing-singapore/',
    serialize(item) {
      // Emit <lastmod> for every sitemap URL (Ben audit I5).
      item.lastmod = BUILD_LASTMOD;
      return item;
    },
  })],
});
