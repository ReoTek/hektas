// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  dev: process.env.NODE_ENV !== 'production',
  target: 'static',
  // baseURL: "/hektas",
  modules: [
      '@nuxt/content',
    //   '@nuxtjs/i18n',
      '@nuxtjs/color-mode',
      '@nuxtjs/tailwindcss',
  ],

//   i18n: {
//       defaultLocale: 'tr',
//       locales: [
//           {
//           code: 'en',
//           iso: 'en-US',
//           file: 'en-US.json',
//           name: 'English',
//           icon: '🇬🇧'
//           },
//           {
//           code: 'tr',
//           iso: 'tr-TR',
//           file: 'tr-TR.json',
//           name: 'Türkçe',
//           icon: '🇹🇷'
//           }
//       ],
//       langDir: 'locales/',
//       config: {
//           strategy: "prefix_except_default",
//           defaultLocale: 'tr'
//       },
//   },
  colorMode: {
    classSuffix: ''
  },
  content: {
    sources: {
        // content: {
        //     driver: 'fs',
        //     prefix: '/', // All contents inside this source will be prefixed with `/docs`
        //     base: './content'
        //   }
    }
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: "Hektaş Tarım ve Bilim Deneyim Merkezi",
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
        { name: 'msapplication-TileColor', content: '#1c8248' },
        { name: 'theme-color', content: '#1c8248' },
      
      ],
  
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      
      ]
  
    },
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
})
