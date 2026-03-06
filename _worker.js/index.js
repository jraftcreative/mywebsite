globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C9Jwx4r7.mjs';
import { manifest } from './manifest_DPMuD86a.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/digital-marketing-agency-singapore.astro.mjs');
const _page5 = () => import('./pages/ecommerce-website-singapore.astro.mjs');
const _page6 = () => import('./pages/fnb-website-design-singapore.astro.mjs');
const _page7 = () => import('./pages/google-ads-agency-singapore.astro.mjs');
const _page8 = () => import('./pages/portfolio.astro.mjs');
const _page9 = () => import('./pages/privacy-policy.astro.mjs');
const _page10 = () => import('./pages/process.astro.mjs');
const _page11 = () => import('./pages/seo-services-singapore.astro.mjs');
const _page12 = () => import('./pages/service-page/branding-and-strategy.astro.mjs');
const _page13 = () => import('./pages/service-page/digital-marketing.astro.mjs');
const _page14 = () => import('./pages/service-page/sales-and-conversion.astro.mjs');
const _page15 = () => import('./pages/services/paid-ads.astro.mjs');
const _page16 = () => import('./pages/services/seo-performance.astro.mjs');
const _page17 = () => import('./pages/services/social-media.astro.mjs');
const _page18 = () => import('./pages/services/website-development.astro.mjs');
const _page19 = () => import('./pages/small-business-website-singapore.astro.mjs');
const _page20 = () => import('./pages/social-media-marketing-singapore.astro.mjs');
const _page21 = () => import('./pages/startup-website-singapore.astro.mjs');
const _page22 = () => import('./pages/terms.astro.mjs');
const _page23 = () => import('./pages/web-design-singapore.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/digital-marketing-agency-singapore.astro", _page4],
    ["src/pages/ecommerce-website-singapore.astro", _page5],
    ["src/pages/fnb-website-design-singapore.astro", _page6],
    ["src/pages/google-ads-agency-singapore.astro", _page7],
    ["src/pages/portfolio.astro", _page8],
    ["src/pages/privacy-policy.astro", _page9],
    ["src/pages/process.astro", _page10],
    ["src/pages/seo-services-singapore.astro", _page11],
    ["src/pages/service-page/branding-and-strategy.astro", _page12],
    ["src/pages/service-page/digital-marketing.astro", _page13],
    ["src/pages/service-page/sales-and-conversion.astro", _page14],
    ["src/pages/services/paid-ads.astro", _page15],
    ["src/pages/services/seo-performance.astro", _page16],
    ["src/pages/services/social-media.astro", _page17],
    ["src/pages/services/website-development.astro", _page18],
    ["src/pages/small-business-website-singapore.astro", _page19],
    ["src/pages/social-media-marketing-singapore.astro", _page20],
    ["src/pages/startup-website-singapore.astro", _page21],
    ["src/pages/terms.astro", _page22],
    ["src/pages/web-design-singapore.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
