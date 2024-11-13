import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TRacer",
  titleTemplate: ':title | TRacer',
  description: "An app meant to save time sending racer times to race control over radio",

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
      { text: 'Docs', link: '/docs/setup/getting-started' },
      { text: 'Use the app', link: 'https://app.trackmyracer.live' },
    ],

    // sidebar: [
    //   {
    //     text: 'Docs',
    //     items: [
    //       // { text: 'Getting started', link: '/docs' },
    //     ]
    //   }
    // ],
    // sidebar: {
    //   '/docs/': [
    //     {
    //       text: 'TRacer Setup Guide',
    //       // items: [
    //       //   { text: 'Getting started', link: '/docs' },
    //       //   { text: 'Manual setup', link: '/docs/manualSetup' },
    //       //   { text: 'JSON data file schema', link: '/docs/raceDataFile' },
    //       // ]
    //     }
    //   ]
    // }
    sidebar: {
      '/docs/': [
        {
          text: 'TRacer Setup Guide',
          items: [
            { text: 'Getting Started', link: '/docs/setup/getting-started' },
            { text: 'Manual Setup', link: '/docs/setup/manual-setup' },
            { text: 'Upload File Setup', link: '/docs/setup/uploadFile' },
          ],
        },
        {
          text: 'Using TRacer',
          items: [
            { text: 'Entering Racer Times', link: '/docs/usage/enteringTimes' },
            { text: 'Sending and Receiving Data', link: '/docs/usage/sendingReceiving' },
            { text: 'Viewing Records', link: '/docs/usage/viewingRecords' },
          ],
        },
        {
          text: 'Advanced Options',
          items: [
            { text: 'Changing Aid Station or Event', link: '/docs/advanced/switchingStationEvent' },
            { text: 'JSON Data File Schema', link: '/docs/advanced/jsonSchema' },
          ],
        },
      ],
    }
  }
})
