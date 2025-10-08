<script setup lang="ts">
import { ref, onMounted } from 'vue'

const appear = ref(false)
const showUserMessage = ref(false)
const showAgentThinking = ref(false)
const showStripeAction = ref(false)
const showNotionAction = ref(false)
const showSlackAction = ref(false)
const showAgentResponse = ref(false)

onMounted(() => {
  appear.value = true

  // Séquence d'animation
  setTimeout(() => { showUserMessage.value = true }, 300)
  setTimeout(() => { showAgentThinking.value = true }, 1200)
  setTimeout(() => { showStripeAction.value = true }, 2000)
  setTimeout(() => { showNotionAction.value = true }, 2800)
  setTimeout(() => { showSlackAction.value = true }, 3600)
  setTimeout(() => { showAgentResponse.value = true }, 4400)

  // Boucle : redémarrer l'animation toutes les 12 secondes
  setInterval(() => {
    showUserMessage.value = false
    showAgentThinking.value = false
    showStripeAction.value = false
    showNotionAction.value = false
    showSlackAction.value = false
    showAgentResponse.value = false

    setTimeout(() => { showUserMessage.value = true }, 300)
    setTimeout(() => { showAgentThinking.value = true }, 1200)
    setTimeout(() => { showStripeAction.value = true }, 2000)
    setTimeout(() => { showNotionAction.value = true }, 2800)
    setTimeout(() => { showSlackAction.value = true }, 3600)
    setTimeout(() => { showAgentResponse.value = true }, 4400)
  }, 12000)
})
</script>

<template>
  <div class="relative w-full py-16 overflow-hidden bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30 dark:to-transparent">
    <UContainer>
      <!-- Titre de la section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Voyez <span class="text-primary">l'IA en action</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Un exemple concret d'automatisation qui vous fait gagner des heures chaque semaine
        </p>
      </div>

      <!-- Scénario de conversation -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Layout Desktop (md et +) -->
        <div class="hidden md:block min-h-[550px] relative">
          <!-- Bulle utilisateur en haut -->
          <Transition name="bubble">
            <div
              v-if="showUserMessage"
              class="absolute top-0 left-12 max-w-md z-20"
            >
              <div class="flex items-start gap-3">
                <!-- Avatar utilisateur -->
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold shadow-lg">
                  M
                </div>
                <!-- Bulle de message -->
                <div class="flex-1 bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                  <p class="text-base font-medium text-gray-800 dark:text-gray-200">
                    Un nouveau client vient de payer 199€ sur Stripe. Crée-lui un espace d'onboarding dans Notion et envoie un message de bienvenue à l'équipe sur Slack.
                  </p>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Agent IA au centre -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              class="relative transition-all duration-500"
              :class="appear ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
            >
              <!-- Glow effect -->
              <div
                class="absolute inset-0 blur-2xl bg-gradient-to-r from-primary-600 via-purple-600 to-primary-400 transition-opacity duration-500"
                :class="showAgentThinking ? 'opacity-60 animate-pulse' : 'opacity-30'"
              />

              <!-- Logo BotItYourself -->
              <div class="relative bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 shadow-2xl border-2 border-primary-500/50">
                <div class="bg-white dark:bg-white/95 rounded-lg p-3 backdrop-blur-sm shadow-inner">
                  <img
                    src="/logos/botityourself.png"
                    alt="Agent IA"
                    class="w-20 h-20 object-contain"
                  >
                </div>

                <!-- Indicateur "En train de travailler" -->
                <Transition name="fade">
                  <div
                    v-if="showAgentThinking && !showAgentResponse"
                    class="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <div class="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                      <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 0ms" />
                        <div class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 150ms" />
                        <div class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 300ms" />
                      </div>
                      <span>En cours...</span>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

          <!-- Applications cibles avec flux animés -->
          <div class="absolute top-1/2 -translate-y-1/2 right-12 flex flex-col gap-6">
            <!-- Stripe -->
            <Transition name="app-slide">
              <div v-if="showStripeAction" class="relative">
                <!-- Ligne de connexion animée -->
                <svg class="absolute right-full top-1/2 -translate-y-1/2 mr-2" width="140" height="2">
                  <line x1="0" y1="1" x2="140" y2="1" stroke="currentColor" stroke-width="2" class="text-green-400" stroke-dasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.6s" repeatCount="indefinite" />
                  </line>
                </svg>

                <div class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700 min-w-[160px]">
                  <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-md">
                    <img src="/logos/stripe.png" alt="Stripe" class="w-6 h-6 object-contain">
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-semibold">Stripe</p>
                    <p class="text-xs text-green-600 dark:text-green-400">✓ Paiement détecté</p>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Notion -->
            <Transition name="app-slide">
              <div v-if="showNotionAction" class="relative">
                <!-- Ligne de connexion animée -->
                <svg class="absolute right-full top-1/2 -translate-y-1/2 mr-2" width="140" height="2">
                  <line x1="0" y1="1" x2="140" y2="1" stroke="currentColor" stroke-width="2" class="text-purple-400" stroke-dasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.6s" repeatCount="indefinite" />
                  </line>
                </svg>

                <div class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700 min-w-[160px]">
                  <div class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md">
                    <img src="/logos/notion.png" alt="Notion" class="w-6 h-6 object-contain">
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-semibold">Notion</p>
                    <p class="text-xs text-purple-600 dark:text-purple-400">✓ Page créée</p>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Slack -->
            <Transition name="app-slide">
              <div v-if="showSlackAction" class="relative">
                <!-- Ligne de connexion animée -->
                <svg class="absolute right-full top-1/2 -translate-y-1/2 mr-2" width="140" height="2">
                  <line x1="0" y1="1" x2="140" y2="1" stroke="currentColor" stroke-width="2" class="text-blue-400" stroke-dasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.6s" repeatCount="indefinite" />
                  </line>
                </svg>

                <div class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700 min-w-[160px]">
                  <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                    <img src="/logos/slack.png" alt="Slack" class="w-6 h-6 object-contain">
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-semibold">Slack</p>
                    <p class="text-xs text-blue-600 dark:text-blue-400">✓ Message envoyé</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Bulle réponse agent en bas -->
          <Transition name="bubble">
            <div
              v-if="showAgentResponse"
              class="absolute -bottom-8 right-12 max-w-md z-20"
            >
              <div class="flex items-end gap-3 flex-row-reverse">
                <!-- Avatar agent -->
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-white" />
                </div>
                <!-- Bulle de message -->
                <div class="flex-1 bg-gradient-to-br from-primary-500 to-purple-500 text-white rounded-2xl rounded-br-none p-4 shadow-xl">
                  <p class="text-base font-medium">
                    ✓ C'est fait ! J'ai créé l'espace d'onboarding dans Notion avec les ressources essentielles et notifié l'équipe sur #nouveaux-clients. Le client a aussi reçu un email de bienvenue automatique.
                  </p>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Particules décoratives - style hero banner -->
          <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Petites bulles qui remontent -->
            <div
              v-for="i in 20"
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
              v-for="i in 10"
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
          </div>
        </div>

        <!-- Layout Mobile (< md) - Version empilée verticale -->
        <div class="md:hidden flex flex-col gap-6 px-4">
          <!-- Bulle utilisateur -->
          <Transition name="bubble">
            <div v-if="showUserMessage" class="flex items-start gap-3">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold shadow-lg">
                M
              </div>
              <div class="flex-1 bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Un nouveau client vient de payer 199€ sur Stripe. Crée-lui un espace d'onboarding dans Notion et envoie un message de bienvenue à l'équipe sur Slack.
                </p>
              </div>
            </div>
          </Transition>

          <!-- Agent IA central -->
          <div class="flex justify-center py-4">
            <div
              class="relative transition-all duration-500"
              :class="appear ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
            >
              <!-- Glow effect -->
              <div
                class="absolute inset-0 blur-2xl bg-gradient-to-r from-primary-600 via-purple-600 to-primary-400 transition-opacity duration-500"
                :class="showAgentThinking ? 'opacity-60 animate-pulse' : 'opacity-30'"
              />

              <!-- Logo BotItYourself -->
              <div class="relative bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-2xl border-2 border-primary-500/50">
                <div class="bg-white dark:bg-white/95 rounded-lg p-2.5 backdrop-blur-sm shadow-inner">
                  <img
                    src="/logos/botityourself.png"
                    alt="Agent IA"
                    class="w-16 h-16 object-contain"
                  >
                </div>

                <!-- Indicateur "En train de travailler" -->
                <Transition name="fade">
                  <div
                    v-if="showAgentThinking && !showAgentResponse"
                    class="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <div class="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                      <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 0ms" />
                        <div class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 150ms" />
                        <div class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 300ms" />
                      </div>
                      <span>En cours...</span>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

          <!-- Applications cibles empilées -->
          <div class="flex flex-col gap-4">
            <!-- Stripe -->
            <Transition name="app-slide-mobile">
              <div v-if="showStripeAction" class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-md">
                  <img src="/logos/stripe.png" alt="Stripe" class="w-6 h-6 object-contain">
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold">Stripe</p>
                  <p class="text-xs text-green-600 dark:text-green-400">✓ Paiement détecté</p>
                </div>
              </div>
            </Transition>

            <!-- Notion -->
            <Transition name="app-slide-mobile">
              <div v-if="showNotionAction" class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md">
                  <img src="/logos/notion.png" alt="Notion" class="w-6 h-6 object-contain">
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold">Notion</p>
                  <p class="text-xs text-purple-600 dark:text-purple-400">✓ Page créée</p>
                </div>
              </div>
            </Transition>

            <!-- Slack -->
            <Transition name="app-slide-mobile">
              <div v-if="showSlackAction" class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                  <img src="/logos/slack.png" alt="Slack" class="w-6 h-6 object-contain">
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold">Slack</p>
                  <p class="text-xs text-blue-600 dark:text-blue-400">✓ Message envoyé</p>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Bulle réponse agent -->
          <Transition name="bubble">
            <div v-if="showAgentResponse" class="flex items-end gap-3 flex-row-reverse">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-white" />
              </div>
              <div class="flex-1 bg-gradient-to-br from-primary-500 to-purple-500 text-white rounded-2xl rounded-br-none p-4 shadow-xl">
                <p class="text-sm font-medium">
                  ✓ C'est fait ! J'ai créé l'espace d'onboarding dans Notion avec les ressources essentielles et notifié l'équipe sur #nouveaux-clients. Le client a aussi reçu un email de bienvenue automatique.
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA en dessous du scénario -->
      <div class="text-center mt-16">
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
          💡 <span class="font-semibold">Temps économisé</span> : 15 minutes par nouveau client → <span class="text-primary font-bold">100% automatisé</span>
        </p>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
/* Transitions pour les bulles */
.bubble-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bubble-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-10px);
}

/* Transitions pour les apps */
.app-slide-enter-active {
  transition: all 0.4s ease-out;
}

.app-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

/* Fade simple */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animations de bulles qui remontent */
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

.animate-bubble {
  animation: bubble 15s ease-in-out infinite;
}

.animate-bubble-slow {
  animation: bubble-slow 20s ease-in-out infinite;
}

/* Transition pour mobile */
.app-slide-mobile-enter-active {
  transition: all 0.4s ease-out;
}

.app-slide-mobile-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
