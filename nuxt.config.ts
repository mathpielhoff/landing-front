export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    // Configuration pour GitHub Pages
    baseURL: '/landing-front/', 
    buildAssetsDir: 'assets',

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

  // SSR activé pour la génération de pages HTML statiques
  ssr: true,

  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  // Nécessaire pour les versions récentes de Nuxt 3
  compatibilityDate: '2024-04-03'
})
