<script setup lang="ts">
import { ref, onMounted } from 'vue'

const appear = ref(false)

// Tous les logos d'applications disponibles (pas de LLM)
const allLogos = [
  '/logos/airtable.png', '/logos/asana.png', '/logos/monday_com.png',
  '/logos/trello.png', '/logos/figma.png', '/logos/microsoft.png',
  '/logos/zoom.png', '/logos/slack.png', '/logos/discord.png',
  '/logos/github.png', '/logos/stripe.png', '/logos/linear.png',
  '/logos/notion.png', '/logos/google.png', '/logos/outlook.png',
  '/logos/gmail.png', '/logos/hubspot.png', '/logos/zapier.png'
]

// Créer des lignes différentes pour éviter trop de répétitions
const logoRows = [
  // Ligne 1 - dupliquer une seule fois pour la boucle
  [...allLogos.slice(0, 9), ...allLogos.slice(0, 9)],
  // Ligne 2 - autres logos inversés
  [...allLogos.slice(9, 18), ...allLogos.slice(9, 18)].reverse(),
  // Ligne 3 - mélange
  [...allLogos.slice(3, 12), ...allLogos.slice(3, 12)],
  // Ligne 4 - autre mélange inversé
  [...allLogos.slice(6, 15), ...allLogos.slice(6, 15)].reverse()
]

onMounted(() => {
  appear.value = true
})
</script>

<template>
  <div class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Background avec logos qui défilent -->
    <div class="absolute inset-0 flex flex-col justify-center gap-8 md:gap-12 opacity-20">
      <!-- Ligne 1 - défile vers la droite -->
      <div class="flex gap-6 animate-scroll-right">
        <div
          v-for="(logo, index) in logoRows[0]"
          :key="`row1-${index}`"
          class="flex-shrink-0 relative logo-card"
        >
          <img
            :src="logo"
            :alt="`Integration ${index}`"
            class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-60 relative z-10"
          >
        </div>
      </div>

      <!-- Ligne 2 - défile vers la gauche -->
      <div class="flex gap-6 animate-scroll-left">
        <div
          v-for="(logo, index) in logoRows[1]"
          :key="`row2-${index}`"
          class="flex-shrink-0 relative logo-card"
        >
          <img
            :src="logo"
            :alt="`Integration ${index}`"
            class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-60 relative z-10"
          >
        </div>
      </div>

      <!-- Ligne 3 - défile vers la droite -->
      <div class="flex gap-6 animate-scroll-right-slow">
        <div
          v-for="(logo, index) in logoRows[2]"
          :key="`row3-${index}`"
          class="flex-shrink-0 relative logo-card"
        >
          <img
            :src="logo"
            :alt="`Integration ${index}`"
            class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-60 relative z-10"
          >
        </div>
      </div>

      <!-- Ligne 4 - défile vers la gauche -->
      <div class="flex gap-6 animate-scroll-left-slow">
        <div
          v-for="(logo, index) in logoRows[3]"
          :key="`row4-${index}`"
          class="flex-shrink-0 relative logo-card"
        >
          <img
            :src="logo"
            :alt="`Integration ${index}`"
            class="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-60 relative z-10"
          >
        </div>
      </div>
    </div>

    <!-- Overlay gradient pour adoucir les bords - plus progressif -->
    <div class="absolute inset-0 pointer-events-none" style="
      background: linear-gradient(to right,
        white 0%,
        rgba(255, 255, 255, 0.8) 5%,
        transparent 20%,
        transparent 80%,
        rgba(255, 255, 255, 0.8) 95%,
        white 100%
      );
    " />
    <div class="dark-gradient absolute inset-0 pointer-events-none opacity-0 dark:opacity-100" style="
      background: linear-gradient(to right,
        rgb(3, 7, 18) 0%,
        rgba(3, 7, 18, 0.8) 5%,
        transparent 20%,
        transparent 80%,
        rgba(3, 7, 18, 0.8) 95%,
        rgb(3, 7, 18) 100%
      );
    " />
    <div class="absolute inset-0 pointer-events-none" style="
      background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0.5) 0%,
        transparent 25%,
        transparent 75%,
        rgba(255, 255, 255, 0.5) 100%
      );
    " />
    <div class="dark-gradient absolute inset-0 pointer-events-none opacity-0 dark:opacity-100" style="
      background: linear-gradient(to bottom,
        rgba(3, 7, 18, 0.5) 0%,
        transparent 25%,
        transparent 75%,
        rgba(3, 7, 18, 0.5) 100%
      );
    " />

    <!-- Contenu principal - BotItYourself -->
    <div class="relative h-full flex items-center justify-center px-8">
      <div class="text-center relative z-10">
        <!-- Mega glow background -->
        <div class="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-400" />

        <!-- Logo BotItYourself -->
        <div
          class="transition-all duration-1000"
          :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <img
            src="/logos/biy_logo.png"
            alt="BotItYourself Logo"
            class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto object-contain drop-shadow-2xl mb-2"
          >
        </div>

        <!-- Titre principal -->
        <div
          class="transition-all duration-1000 delay-200"
          :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <h1 class="relative text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
            <span
              class="text-gray-800 dark:text-white"
              style="text-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(139, 92, 246, 0.4)"
            >Bot</span><span
              class="bg-gradient-to-r from-primary-600 via-purple-500 to-primary-400 bg-clip-text text-transparent animate-pulse"
              style="text-shadow: 0 0 100px rgba(139, 92, 246, 1)"
            >It</span><span
              class="text-gray-800 dark:text-white"
              style="text-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(139, 92, 246, 0.4)"
            >Yourself</span>
          </h1>
        </div>

        <!-- Description -->
        <div
          class="transition-all duration-1000 delay-[400ms]"
          :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <p class="relative text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            Connectez tout. Automatisez tout.
          </p>
        </div>

        <!-- Sous-titre avec effet de gradient -->
        <div
          class="mt-6 transition-all duration-1000 delay-[600ms]"
          :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <p class="relative text-sm md:text-lg text-gray-500 dark:text-gray-400">
            Des <span class="font-semibold text-primary-600 dark:text-primary-400">milliers d'intégrations</span> à portée de main
          </p>
        </div>
      </div>
    </div>

    <!-- Floating bubbles subtiles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Petites bulles -->
      <div
        v-for="i in 30"
        :key="`bubble-small-${i}`"
        class="absolute rounded-full animate-bubble"
        :class="i % 3 === 0 ? 'bg-primary/10' : i % 3 === 1 ? 'bg-purple-500/10' : 'bg-blue-500/10'"
        :style="{
          width: `${4 + Math.random() * 8}px`,
          height: `${4 + Math.random() * 8}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 15}s`
        }"
      />

      <!-- Grandes bulles subtiles -->
      <div
        v-for="i in 6"
        :key="`bubble-large-${i}`"
        class="absolute rounded-full animate-float-slow blur-xl"
        :class="i % 3 === 0 ? 'bg-primary/3' : i % 3 === 1 ? 'bg-purple-500/3' : 'bg-pink-500/3'"
        :style="{
          width: `${80 + Math.random() * 120}px`,
          height: `${80 + Math.random() * 120}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${20 + Math.random() * 30}s`
        }"
      />
    </div>
  </div>
</template>

<style scoped>
/* Logo card avec effet de diffusion */
.logo-card {
  padding: 0.75rem;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
  border-radius: 1rem;
  backdrop-filter: blur(8px);
}

.dark .logo-card {
  background: radial-gradient(circle, rgba(75, 85, 99, 0.4) 0%, rgba(75, 85, 99, 0.2) 50%, transparent 100%);
}

/* Animations de défilement */
@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-right {
  animation: scroll-right 40s linear infinite;
  width: fit-content;
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
  width: fit-content;
}

.animate-scroll-right-slow {
  animation: scroll-right 60s linear infinite;
  width: fit-content;
}

.animate-scroll-left-slow {
  animation: scroll-left 60s linear infinite;
  width: fit-content;
}

/* Animations de bulles */
@keyframes bubble {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) translateX(calc(20px * var(--random, 1))) scale(1.2);
    opacity: 0;
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -20px) scale(1.1);
  }
  50% {
    transform: translate(-15px, -40px) scale(0.9);
  }
  75% {
    transform: translate(-25px, -20px) scale(1.05);
  }
}

.animate-bubble {
  animation: bubble 15s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 25s ease-in-out infinite;
}
</style>
