import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TRacer",
  description: "An app meant to save time sending racer times to net control over radio",

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/TRacer.svg',
      dark: '/TRacer-dark.svg',
      alt: 'TRacer'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Use the app', link: 'https://app.trackmyracer.live' },
    ],
  }
})
