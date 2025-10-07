export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: './',
    buildAssetsDir: '_nuxt/',
    head: {
      title: 'BotItYourSelf.AI - Créez vos Agents IA en Minutes',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plateforme SaaS pour créer des agents IA intelligents.' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // SSR pour génération statique
  ssr: true,

  // Configuration Nitro pour génération statique
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
