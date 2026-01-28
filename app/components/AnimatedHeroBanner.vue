<script setup lang="ts">
import { ref, onMounted } from 'vue'

const appear = ref(false)

// Récupération de la baseURL
const config = useRuntimeConfig()
const base = config.app.baseURL

const fixPath = (path: string) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.substring(1) : path
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  return `${cleanBase}${cleanPath}`
}

const rawLogos = [
  '/logos/airtable.png', '/logos/asana.png', '/logos/monday_com.png',
  '/logos/trello.png', '/logos/figma.png', '/logos/microsoft.png',
  '/logos/zoom.png', '/logos/slack.png', '/logos/discord.png',
  '/logos/github.png', '/logos/stripe.png', '/logos/linear.png',
  '/logos/notion.png', '/logos/google.png', '/logos/outlook.png',
  '/logos/gmail.png', '/logos/hubspot.png', '/logos/zapier.png'
]

const allLogos = rawLogos.map(path => fixPath(path))

const logoRows = [
  [...allLogos.slice(0, 9), ...allLogos.slice(0, 9)],
  [...allLogos.slice(9, 18), ...allLogos.slice(9, 18)].reverse(),
  [...allLogos.slice(3, 12), ...allLogos.slice(3, 12)],
  [...allLogos.slice(6, 15), ...allLogos.slice(6, 15)].reverse()
]

onMounted(() => {
  appear.value = true
})
</script>

<template>
  <div class="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-white dark:bg-gray-950">
    <div class="absolute inset-0 flex flex-col justify-center gap-6 sm:gap-8 md:gap-12">
      
      <div class="flex gap-6 animate-scroll-right">
        <div v-for="(logo, index) in logoRows[0]" :key="`row1-${index}`" class="flex-shrink-0 relative logo-card">
          <img :src="logo" class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-30 dark:opacity-40 dark:invert relative z-10">
        </div>
      </div>

      <div class="flex gap-6 animate-scroll-left">
        <div v-for="(logo, index) in logoRows[1]" :key="`row2-${index}`" class="flex-shrink-0 relative logo-card">
          <img :src="logo" class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-30 dark:opacity-40 dark:invert relative z-10">
        </div>
      </div>

      <div class="flex gap-6 animate-scroll-right-slow">
        <div v-for="(logo, index) in logoRows[2]" :key="`row3-${index}`" class="flex-shrink-0 relative logo-card">
          <img :src="logo" class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-30 dark:opacity-40 dark:invert relative z-10">
        </div>
      </div>

      <div class="flex gap-6 animate-scroll-left-slow">
        <div v-for="(logo, index) in logoRows[3]" :key="`row4-${index}`" class="flex-shrink-0 relative logo-card">
          <img :src="logo" class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-30 dark:opacity-40 dark:invert relative z-10">
        </div>
      </div>
    </div>

    <div class="absolute inset-0 pointer-events-none dark:hidden bg-gradient-overlay-light" />
    <div class="absolute inset-0 pointer-events-none hidden dark:block bg-gradient-overlay-dark" />

    <div class="relative h-full flex items-center justify-center px-8">
      <div class="text-center relative z-10">
        <div class="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-400" />
        <div :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" class="transition-all duration-1000">
          <img :src="fixPath('/logos/biy_logo.png')" alt="Logo" class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto object-contain drop-shadow-2xl mb-2">
        </div>
        <div :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" class="transition-all duration-1000 delay-200">
          <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4 px-4">
            <span class="text-gray-800 dark:text-white glow-text">Bot</span><span class="bg-gradient-to-r from-primary-600 via-purple-500 to-primary-400 bg-clip-text text-transparent animate-pulse glow-purple">It</span><span class="text-gray-800 dark:text-white glow-text">Yourself</span>
          </h1>
        </div>
        <p class="text-lg sm:text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium px-4">Connectez tout. Automatisez tout.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-card {
  padding: 0.75rem;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
  border-radius: 1rem;
  backdrop-filter: blur(4px);
}
.dark .logo-card {
  background: radial-gradient(circle, rgba(100, 116, 139, 0.2) 0%, rgba(71, 85, 105, 0.1) 50%, transparent 100%);
}

.bg-gradient-overlay-light {
  background: linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, transparent 20%, transparent 80%, rgba(255, 255, 255, 0.6) 100%);
}
.bg-gradient-overlay-dark {
  background: linear-gradient(to right, rgb(3, 7, 18) 0%, transparent 15%, transparent 85%, rgb(3, 7, 18) 100%),
              linear-gradient(to bottom, rgba(3, 7, 18, 0.7) 0%, transparent 20%, transparent 80%, rgba(3, 7, 18, 0.7) 100%);
}

.glow-text { text-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(139, 92, 246, 0.4); }
.glow-purple { text-shadow: 0 0 100px rgba(139, 92, 246, 1); }

@keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0%); } }
@keyframes scroll-left { from { transform: translateX(0%); } to { transform: translateX(-50%); } }

.animate-scroll-right { animation: scroll-right 40s linear infinite; width: fit-content; }
.animate-scroll-left { animation: scroll-left 40s linear infinite; width: fit-content; }
.animate-scroll-right-slow { animation: scroll-right 60s linear infinite; width: fit-content; }
.animate-scroll-left-slow { animation: scroll-left 60s linear infinite; width: fit-content; }
</style>
