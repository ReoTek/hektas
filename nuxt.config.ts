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
  }
})
