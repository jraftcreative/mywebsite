import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Build-time timestamp for sitemap <lastmod>. Google accepts the build
// date as a valid lastmod signal — far better than emitting no lastmod.
const BUILD_LASTMOD = new Date().toISOString();

const REDIRECTS = {
  '/services/': '/#services',
  // SEO cannibalisation fixes (Ben audit C4) — legacy landing pages
  // 301 to canonical service hubs so we stop splitting rankings.
  '/seo-services-singapore/': '/services/seo-performance/',
  '/web-design-singapore/': '/services/website-development/',
  '/social-media-marketing-singapore/': '/services/social-media/',
  // F&B vertical hub consolidation (Jun 2026) — old industries page
  // 301s to new vertical-marketing canonical for SEO + AIO.
  '/industries/food-beverage/': '/fnb-marketing-singapore/',
  // Ben GEO-cluster audit (Sep 2026) — merge duplicate AI-search pages
  // into their canonical hubs to end cannibalisation.
  '/ai-search-optimisation-agency-singapore/': '/geo-agency-singapore/',
  '/get-recommended-by-chatgpt-singapore/': '/services/ai-search-optimisation/',
  // Page cut batch 1 (21 Nov 2026): 44 template pages with 0 Google
  // impressions over 81 days, 301'd to their parent page. List and
  // reasoning: Marketing/SEO Agent/clients/jraft-creative/page-cut-list-batch1-2026-11-21.md
  '/education-content-marketing-singapore/': '/education-marketing-agency-singapore/',
  '/education-google-ads-singapore/': '/education-marketing-agency-singapore/',
  '/education-social-media-marketing-singapore/': '/education-marketing-agency-singapore/',
  '/student-enrolment-marketing-singapore/': '/education-marketing-agency-singapore/',
  '/tuition-centre-branding-singapore/': '/tuition-centre-marketing-singapore/',
  '/enrichment-centre-branding-singapore/': '/enrichment-centre-marketing-singapore/',
  '/music-school-branding-singapore/': '/music-school-marketing-singapore/',
  '/childcare-centre-ai-search-optimisation-singapore/': '/childcare-marketing-singapore/',
  '/childcare-social-media-singapore/': '/childcare-marketing-singapore/',
  '/beauty-content-marketing-singapore/': '/beauty-salon-marketing-singapore/',
  '/beauty-salon-branding-singapore/': '/beauty-salon-marketing-singapore/',
  '/beauty-salon-google-ads-singapore/': '/beauty-salon-marketing-singapore/',
  '/beauty-salon-social-media-singapore/': '/beauty-salon-marketing-singapore/',
  '/aesthetics-clinic-google-ads-singapore/': '/aesthetics-clinic-marketing-singapore/',
  '/aesthetics-clinic-website-singapore/': '/aesthetics-clinic-marketing-singapore/',
  '/spa-google-ads-singapore/': '/spa-marketing-singapore/',
  '/spa-seo-singapore/': '/spa-marketing-singapore/',
  '/spa-social-media-singapore/': '/spa-marketing-singapore/',
  '/physiotherapy-ai-search-optimisation-singapore/': '/physiotherapy-marketing-singapore/',
  '/physiotherapy-content-marketing-singapore/': '/physiotherapy-marketing-singapore/',
  '/tcm-clinic-ai-search-optimisation-singapore/': '/tcm-marketing-singapore/',
  '/veterinary-clinic-ai-search-optimisation-singapore/': '/veterinary-clinic-marketing-singapore/',
  '/mental-health-clinic-website-singapore/': '/mental-health-marketing-singapore/',
  '/wellness-marketing-agency-singapore/': '/industries/healthcare/',
  '/wellness-content-marketing-singapore/': '/industries/healthcare/',
  '/gym-ai-search-optimisation-singapore/': '/gym-marketing-singapore/',
  '/gym-branding-singapore/': '/gym-marketing-singapore/',
  '/martial-arts-website-singapore/': '/martial-arts-marketing-singapore/',
  '/yoga-studio-branding-singapore/': '/industries/fitness/',
  '/yoga-studio-geo-singapore/': '/industries/fitness/',
  '/fnb-seo-singapore/': '/fnb-marketing-agency-singapore/',
  '/restaurant-facebook-ads-singapore/': '/restaurant-marketing-singapore/',
  '/affordable-website-design-singapore/': '/services/website-development/',
  '/corporate-website-design-singapore/': '/services/website-development/',
  '/landing-page-design-singapore/': '/services/website-development/',
  '/shopify-website-design-singapore/': '/services/website-development/',
  '/wordpress-website-design-singapore/': '/services/website-development/',
  '/website-maintenance-singapore/': '/services/website-development/',
  '/website-redesign-singapore/': '/services/website-development/',
  '/church-website-design-singapore/': '/services/website-development/',
  '/cleaning-company-website-singapore/': '/services/website-development/',
  '/pet-shop-website-singapore/': '/services/website-development/',
  '/chatgpt-optimisation-singapore/': '/services/ai-search-optimisation/',
  '/corporate-secretary-marketing-singapore/': '/industries/professional-services/',
};
const REDIRECT_SOURCES = new Set(Object.keys(REDIRECTS));

export default defineConfig({
  site: 'https://jraftcreative.com',
  output: 'static',
  // Keys use the trailing-slash form only. Astro normalises trailing slashes,
  // so declaring both '/x' and '/x/' registers the same route twice and warns
  // about a collision (a hard error in later Astro versions). The emitted
  // output is identical either way: dist/<route>/index.html.
  redirects: REDIRECTS,
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
      page !== 'https://jraftcreative.com/industries/food-beverage/' &&
      page !== 'https://jraftcreative.com/ai-search-optimisation-agency-singapore/' &&
      page !== 'https://jraftcreative.com/get-recommended-by-chatgpt-singapore/' &&
      // Exclude every redirect source (incl. page-cut batch 1).
      !REDIRECT_SOURCES.has(page.replace('https://jraftcreative.com','')),
    serialize(item) {
      // Emit <lastmod> for every sitemap URL (Ben audit I5).
      item.lastmod = BUILD_LASTMOD;
      return item;
    },
  })],
});
