// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-06-14',
  routeRules: {
    // `**` = All Pages
    // '**': { ssr: false }, // Pure SPA
    // '**': { prerender: true }, // SSG
    // '**': { isr: 300 }, // On the first 300 seconds after previous generation
    // '**': { swr: 300 }, // On the first 300 seconds after previous generation (regular app server)
    // '**': { isr: 300, prerender: true }, // generated at build time and regenerated in the background
    // '**': { swr: 300, prerender: true }, // generated at build time and regenerated in the background
    // // ! Hybrid (Not all pages share the same update frequency)
    // '/': { ssr: true },
    // '/categories': { prerender: true },
    // '/categories/*': { swr: 300 },
    // '/posts/*': { swr: 60 },
  },
});
