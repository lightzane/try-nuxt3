# try-nuxt3-real-world

Trying to learn Nuxt 3 (https://nuxt.com/)

Related course: https://www.vuemastery.com/courses/real-world-nuxt-3/server-side-rendering

Cloned from: https://github.com/Code-Pop/Real-World-Nuxt-3

Cloned via `git clone https://github.com/Code-Pop/Real-World-Nuxt-3 -b L2-start`

## How to run this app ![](https://img.shields.io/badge/node-22.16.0-green?style=flat) ![](https://img.shields.io/badge/npm-10.9.2-2ecc71?style=flat)

Install the dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Start the mock API server:

```bash
npm run mock-api
```

## Notes

`app.vue` before it was updated

```vue
<template>
  <div class="layout">
    <!-- 
      NuxtPage: 
      - Placeholder for the current page 
      - Suitable for Single-Layout sites else use NuxtLayout which allows different layout per page
    -->
    <NuxtPage />
  </div>
</template>
```

### Rendering Modes

#### Server-Side Rendering (SSR) ![Static Badge](https://img.shields.io/badge/default-yellow)

This is Default of Nuxt.js

Whenever the user enters a URL in address bar, then it renders the page in real time.

Good for highly-dynamic websites

- Forums
- News Sites
- E-Commerce Platforms

#### Static-Side Generation (SSG)

Renders each page ONLY ONCE at build time. Faster than SSR - page does not need to be generated per request. No need for App Server for hosting an SSG site.

Good for websites that are content driven that don't get update often. Maybe only once a week

- Documentation Site

#### Incremental Static Regeneration (ISR)

Serves the old version of the page while a new version is regenerating in the background.

Good for websites that are content driven that don't get update often. Maybe an hour or so.

- Blog

Mixture of SSG + SSR. But requires App Server or hosting platform that supports CDN caching (i.e. Netlify, Vercel)

#### Stale-While-Revalidate (SWR)

Similar to ISR but does not require CDN caching, and can be a regular App Server

#### Single Page Application (SPA)

Also available in Nuxt.js, since Nuxt.js is a Vue.js framework.

And Vue.js framework is SPA.

Will still behave as a standard Vue.js app

### Rendering Modes Comparison

#### Server and Client

|     | Server | Client |
| --- | :----: | :----: |
| SSR |   ✅   |   ✅   |
| SSG |   ✅   |   ✅   |
| ISR |   ✅   |   ✅   |
| SWR |   ✅   |   ✅   |
| SPA |        |   ✅   |

#### SEO and First Load Performance

|     | SEO | First Load |
| --- | :-: | :--------: |
| SSR | ✅  |     ✅     |
| SSG | ✅  |     ✅     |
| ISR | ✅  |     ✅     |
| SWR | ✅  |     ✅     |
| SPA |     |            |

### Which Rendering Mode to Use

| Question                   | SSR | SSG | SWR | ISR | SPA |
| -------------------------- | :-: | :-: | :-: | :-: | :-: |
| SEO important?             | ✅  | ✅  | ✅  | ✅  |     |
| Minute updates?            | ✅  |     |     |     | ✅  |
| Hourly updates?            | ✅  |     | ✅  | ✅  | ✅  |
| Weekly updates?            | ✅  | ✅  | ✅  | ✅  | ✅  |
| Static hosting?            |     | ✅  |     |     | ✅  |
| First-load perf important? |     | ✅  | ✅  | ✅  |     |

### How to Change Rendering Mode

Via [nuxt.config.ts](./nuxt.config.ts)

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // `**` = All Pages
    // '**': { ssr: false }, // Pure SPA
    // '**': { prerender: true }, // SSG
    // '**': { isr: 300 }, // On the first 300 seconds after previous generation
    // '**': { swr: 300 }, // On the first 300 seconds after previous generation (regular app server)
    // '**': { isr: 300, prerender: true }, // generated at build time and regenerated in the background
    // '**': { swr: 300, prerender: true }, // generated at build time and regenerated in the background
    // ! Hybrid
    // ! Hybrid (Not all pages share the same update frequency)
    '/': { ssr: true },
    '/categories': { prerender: true },
    '/categories/*': { swr: 300 },
    '/posts/*': { swr: 60 },
  },
});
```
