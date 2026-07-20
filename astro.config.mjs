import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Build-time timestamp for sitemap <lastmod>. Google accepts the build
// date as a valid lastmod signal — far better than emitting no lastmod.
const BUILD_LASTMOD = new Date().toISOString();

export default defineConfig({
  site: 'https://jraftcreative.com',
  output: 'static',
  // Keys use the trailing-slash form only. Astro normalises trailing slashes,
  // so declaring both '/x' and '/x/' registers the same route twice and warns
  // about a collision (a hard error in later Astro versions). The emitted
  // output is identical either way: dist/<route>/index.html.
  redirects: {
    '/services/': '/#services',
    // SEO cannibalisation fixes (Ben audit C4) — legacy landing pages
    // 301 to canonical service hubs so we stop splitting rankings.
    '/seo-services-singapore/': '/services/seo-performance/',
    '/web-design-singapore/': '/services/website-development/',
    '/social-media-marketing-singapore/': '/services/social-media/',
    // F&B vertical hub consolidation (Jun 2026) — old industries page
    // 301s to new vertical-marketing canonical for SEO + AIO.
    '/industries/food-beverage/': '/fnb-marketing-singapore/',
  },
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/service-page/') &&
      !page.includes('/portfolio/') &&
      !page.includes('/thank-you/') &&
      !page.includes('/services/#') &&
      !page.includes('/_preview-') &&
      page !== 'https://jraftcreative.com/services/' &&
      // Exclude cannibalisation-redirect source URLs from sitemap.
      page !== 'https://jraftcreative.com/seo-services-singapore/' &&
      page !== 'https://jraftcreative.com/web-design-singapore/' &&
      page !== 'https://jraftcreative.com/social-media-marketing-singapore/' &&
      page !== 'https://jraftcreative.com/industries/food-beverage/',
    serialize(item) {
      // Emit <lastmod> for every sitemap URL (Ben audit I5).
      item.lastmod = BUILD_LASTMOD;
      return item;
    },
  })],
});
