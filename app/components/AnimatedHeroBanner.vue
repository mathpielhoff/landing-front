<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const currentSlide = ref(0)
const appear = ref(false)
let interval: NodeJS.Timeout | null = null

// Tous les logos disponibles pour le slide final (intégrations uniquement, pas de LLM)
// On garde ceux qui ne sont pas dans les autres slides
const allLogos = [
  '/logos/airtable.png', '/logos/asana.png', '/logos/monday_com.png',
  '/logos/trello.png', '/logos/figma.png', '/logos/microsoft.png',
  '/logos/zoom.png', '/logos/slack.png', '/logos/discord.png',
  '/logos/github.png', '/logos/stripe.png', '/logos/linear.png'
]

const slides = [
  {
    action: 'Messages',
    title: 'Bot Messages Yourself',
    description: 'Automatisez toutes vos communications',
    logos: [
      { src: '/logos/slack.png', name: 'Slack', delay: 0, position: 'left' },
      { src: '/logos/outlook.png', name: 'Outlook', delay: 100, position: 'center-left' },
      { src: '/logos/gmail.png', name: 'Gmail', delay: 200, position: 'center-right' },
      { src: '/logos/discord.png', name: 'Discord', delay: 300, position: 'right' }
    ],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    action: 'Documents',
    title: 'Bot Documents Yourself',
    description: 'Gérez vos fichiers intelligemment',
    logos: [
      { src: '/logos/notion.png', name: 'Notion', delay: 0, position: 'left' },
      { src: '/logos/google.png', name: 'Google Drive', delay: 100, position: 'center-left' },
      { src: '/logos/github.png', name: 'GitHub Docs', delay: 200, position: 'center-right' },
      { src: '/logos/slack.png', name: 'Slack', delay: 300, position: 'right' }
    ],
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    action: 'Sales',
    title: 'Bot Sales Yourself',
    description: 'Boostez vos ventes automatiquement',
    logos: [
      { src: '/logos/hubspot.png', name: 'HubSpot', delay: 0, position: 'left' },
      { src: '/logos/stripe.png', name: 'Stripe', delay: 100, position: 'center-left' },
      { src: '/logos/zapier.png', name: 'Zapier', delay: 200, position: 'center-right' },
      { src: '/logos/linear.png', name: 'Linear', delay: 300, position: 'right' }
    ],
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    action: 'Projects',
    title: 'Bot Projects Yourself',
    description: 'Gérez vos projets sans effort',
    logos: [
      { src: '/logos/linear.png', name: 'Linear', delay: 0, position: 'left' },
      { src: '/logos/github.png', name: 'GitHub', delay: 100, position: 'center-left' },
      { src: '/logos/notion.png', name: 'Notion', delay: 200, position: 'center-right' },
      { src: '/logos/zapier.png', name: 'Zapier', delay: 300, position: 'right' }
    ],
    color: 'from-cyan-500/20 to-teal-500/20'
  },
  {
    action: 'ItYourself',
    title: 'BotItYourself',
    description: 'Connectez tout. Automatisez tout.',
    isFinal: true,
    color: 'from-primary-500/20 to-purple-500/20'
  }
]

const startAutoRotate = () => {
  if (interval) clearInterval(interval)

  const nextSlide = () => {
    const nextIndex = (currentSlide.value + 1) % slides.length
    currentSlide.value = nextIndex

    // Si c'est la dernière slide, attendre 12 secondes, sinon 4 secondes
    const delay = slides[nextIndex].isFinal ? 12000 : 4000
    interval = setTimeout(nextSlide, delay)
  }

  // Premier intervalle
  const delay = slides[currentSlide.value].isFinal ? 12000 : 4000
  interval = setTimeout(nextSlide, delay)
}

const stopAutoRotate = () => {
  if (interval) {
    clearTimeout(interval)
    interval = null
  }
}

onMounted(() => {
  appear.value = true
  startAutoRotate()
})

onUnmounted(() => {
  stopAutoRotate()
})

const currentSlideData = computed(() => slides[currentSlide.value])
</script>

<template>
  <div class="relative w-full h-[450px] overflow-visible">
    <!-- Fond transparent avec juste des bulles -->

    <!-- Main content -->
    <div class="relative h-full flex items-center justify-center px-8 max-w-7xl mx-auto">
      <!-- Logos sur les côtés gauche et droite -->
      <TransitionGroup
        v-if="!currentSlideData.isFinal"
        name="fade"
        class="absolute inset-0 pointer-events-none"
      >
        <div
          v-for="(logo, logoIndex) in currentSlideData.logos"
          :key="`side-logo-${currentSlide}-${logo.name}`"
          class="absolute"
          :class="logoIndex % 2 === 0 ? 'left-0' : 'right-0'"
          :style="{
            top: `${15 + Math.floor(logoIndex / 2) * 30}%`,
            transitionDelay: `${logo.delay}ms`
          }"
        >
          <!-- Logo card avec effet glass -->
          <div
            class="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-gray-200/30 dark:border-gray-700/30 shadow-lg"
            :style="{ animation: `float ${3 + logoIndex * 0.5}s ease-in-out infinite` }"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              class="w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 grayscale"
            >
          </div>
        </div>
      </TransitionGroup>

      <!-- Central animated text -->
      <div class="text-center mb-16 relative z-10">

        <!-- Cas normal: Bot [ACTION] Yourself -->
        <div
          v-if="!currentSlideData.isFinal"
          class="flex flex-col items-center gap-4 relative z-10"
        >
          <!-- "Bot" prefix - static avec ombres -->
          <div
            class="transition-all duration-500"
            :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'"
          >
            <span
              class="text-6xl md:text-8xl font-black text-gray-800 dark:text-white"
              style="text-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 40px rgba(139, 92, 246, 0.3)"
            >
              Bot
            </span>
          </div>

          <!-- Rotating action word avec effet spectaculaire -->
          <div class="relative h-24 md:h-32 flex items-center justify-center">
            <TransitionGroup name="slide">
              <div
                v-for="(slide, index) in slides"
                v-show="currentSlide === index"
                :key="slide.action"
                class="absolute"
              >
                <!-- Glow background -->
                <div class="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-primary-600 to-primary-400" />

                <!-- Main text -->
                <span
                  class="relative text-7xl md:text-9xl font-black bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent"
                  style="text-shadow: 0 0 80px rgba(139, 92, 246, 0.8)"
                >
                  {{ slide.action }}
                </span>
              </div>
            </TransitionGroup>
          </div>

          <!-- "Yourself" suffix - static avec ombres -->
          <div
            class="transition-all duration-500 delay-100"
            :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <span
              class="text-6xl md:text-8xl font-black text-gray-800 dark:text-white"
              style="text-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 40px rgba(139, 92, 246, 0.3)"
            >
              Yourself
            </span>
          </div>
        </div>

        <!-- Cas final: BotItYourself en un seul mot SPECTACULAIRE -->
        <TransitionGroup name="slide">
          <div
            v-if="currentSlideData.isFinal"
            key="final-slide"
            class="transition-all duration-500 relative"
          >
          <!-- Mega glow background -->
          <div class="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-400" />

          <h2 class="relative text-7xl md:text-[10rem] font-black leading-none">
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
          </h2>
          </div>
        </TransitionGroup>

        <!-- Description -->
        <div class="mt-8 h-8">
          <TransitionGroup name="fade">
            <p
              v-for="(slide, index) in slides"
              v-show="currentSlide === index"
              :key="`desc-${slide.action}`"
              class="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap"
            >
              {{ slide.description }}
            </p>
          </TransitionGroup>
        </div>
      </div>

      <!-- Final slide with ALL logos in background scattered -->
      <TransitionGroup
        v-if="currentSlideData.isFinal"
        name="fade"
        class="absolute inset-0 pointer-events-none"
      >
        <div
          v-for="(logo, logoIndex) in allLogos"
          :key="`final-logo-${logoIndex}`"
          class="absolute"
          :style="{
            left: `${5 + (logoIndex % 4) * 22}%`,
            top: `${10 + Math.floor(logoIndex / 4) * 25}%`,
            transitionDelay: `${logoIndex * 50}ms`
          }"
        >
          <!-- Logo card avec effet glass -->
          <div
            class="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-gray-200/30 dark:border-gray-700/30 shadow-lg"
            :style="{ animation: `float ${3 + (logoIndex % 3) * 0.5}s ease-in-out infinite`, animationDelay: `${logoIndex * 0.1}s` }"
          >
            <img
              :src="logo"
              :alt="`Integration ${logoIndex}`"
              class="w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 grayscale"
            >
          </div>
        </div>
      </TransitionGroup>

      <!-- Slide indicators simples - en bas -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        <button
          v-for="(slide, index) in slides"
          :key="`indicator-${index}`"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-primary-600 w-8' : 'bg-gray-400 hover:bg-gray-600'"
          @click="currentSlide = index"
        />
      </div>
    </div>

    <!-- Floating bubbles - beaucoup plus nombreuses -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Petites bulles -->
      <div
        v-for="i in 40"
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

      <!-- Bulles moyennes -->
      <div
        v-for="i in 20"
        :key="`bubble-medium-${i}`"
        class="absolute rounded-full animate-bubble-slow"
        :class="i % 2 === 0 ? 'bg-primary/5' : 'bg-purple-500/5'"
        :style="{
          width: `${15 + Math.random() * 20}px`,
          height: `${15 + Math.random() * 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${15 + Math.random() * 20}s`
        }"
      />

      <!-- Grandes bulles subtiles -->
      <div
        v-for="i in 8"
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
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes particle {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1.5);
    opacity: 0;
  }
}

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

@keyframes bubble-slow {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-120vh) translateX(calc(30px * var(--random, 1))) rotate(180deg);
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

.animate-bubble-slow {
  animation: bubble-slow 20s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 25s ease-in-out infinite;
}

/* Gradient radial custom */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Slide transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

/* Fade transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Fly transitions for logos */
.fly-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fly-leave-active {
  transition: all 0.4s ease;
}

.fly-enter-from {
  opacity: 0;
  transform: translateX(-100px) translateY(-50%) scale(0.3) rotate(-180deg);
}

.fly-leave-to {
  opacity: 0;
  transform: translateX(100px) translateY(-50%) scale(0.3) rotate(180deg);
}
</style>
