// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // Configuration SEO optimisée
  app: {
    head: {
      title: 'BotItYourSelf.AI - Créez vos Agents IA en Minutes',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Plateforme SaaS pour créer des agents IA intelligents qui automatisent vos tâches. Tous les modèles IA, collaboration en équipe et 1000+ intégrations.'
        },
        {
          name: 'keywords',
          content: 'agents IA, chatbot, automatisation, OpenAI, Claude, Mistral, Gemini, productivité, assistant IA, intelligence artificielle, SaaS'
        },
        { property: 'og:title', content: 'BotItYourSelf.AI - Automatisez votre travail avec des agents IA' },
        {
          property: 'og:description',
          content: 'Créez des agents IA qui travaillent pour vous 24/7. Connectez vos outils, automatisez vos tâches et gagnez du temps.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://botityourself.ai' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'BotItYourSelf.AI - Agents IA qui automatisent votre travail' },
        {
          name: 'twitter:description',
          content: 'Créez votre premier agent IA en 5 minutes. Automatisez vos tâches et boostez votre productivité.'
        },
        { name: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://botityourself.ai' }
      ]
    }
  },

  // SSR activé pour SEO optimal
  ssr: true,

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  // Configuration runtime
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.botityourself.ai',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://botityourself.ai'
    }
  },

  // Optimisations Nitro
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
