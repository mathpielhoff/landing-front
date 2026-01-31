<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface ChatMessage {
  type: 'user' | 'agent' | 'tool'
  content: string
  toolName?: string
  toolStatus?: 'running' | 'success' | 'error'
  toolResult?: string
  visible: boolean
}

const messages = ref<ChatMessage[]>([
  {
    type: 'user',
    content: 'Envoie un rappel de paiement aux clients qui ont une facture impayée depuis plus de 7 jours.',
    visible: false
  },
  {
    type: 'tool',
    content: 'Recherche des factures impayées...',
    toolName: 'Stripe',
    toolStatus: 'running',
    toolResult: '3 factures trouvées (2 450€ total)',
    visible: false
  },
  {
    type: 'tool',
    content: 'Envoi des emails de rappel...',
    toolName: 'Gmail',
    toolStatus: 'running',
    toolResult: '3 emails envoyés avec succès',
    visible: false
  },
  {
    type: 'agent',
    content: 'C\'est fait ! J\'ai envoyé 3 rappels de paiement :\n\n• **TechCorp** - 850€ (12 jours de retard)\n• **StartupX** - 1 200€ (9 jours de retard)\n• **AgenceDigital** - 400€ (8 jours de retard)\n\nJe te notifie dès qu\'un paiement arrive.',
    visible: false
  }
])

const currentStep = ref(0)
const isAnimating = ref(false)
let animationInterval: ReturnType<typeof setInterval> | null = null

const startAnimation = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentStep.value = 0

  // Reset all messages
  messages.value.forEach(m => {
    m.visible = false
    if (m.toolStatus) m.toolStatus = 'running'
  })

  const steps = [
    { delay: 500, action: () => { messages.value[0].visible = true } },
    { delay: 1500, action: () => { messages.value[1].visible = true } },
    { delay: 2500, action: () => { messages.value[1].toolStatus = 'success' } },
    { delay: 3000, action: () => { messages.value[2].visible = true } },
    { delay: 4000, action: () => { messages.value[2].toolStatus = 'success' } },
    { delay: 4500, action: () => { messages.value[3].visible = true } },
    { delay: 10000, action: () => { startAnimation() } } // Restart loop
  ]

  let currentIndex = 0
  const runStep = () => {
    if (currentIndex < steps.length) {
      setTimeout(() => {
        steps[currentIndex].action()
        currentIndex++
        runStep()
      }, steps[currentIndex].delay)
    }
  }

  runStep()
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  if (animationInterval) {
    clearInterval(animationInterval)
  }
})
</script>

<template>
  <section class="py-20 sm:py-28 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
    </div>

    <UContainer class="relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <UBadge variant="subtle" color="primary" class="mb-4">
          <template #leading>
            <UIcon name="i-lucide-play-circle" class="w-3.5 h-3.5" />
          </template>
          Démo en direct
        </UBadge>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Voyez votre agent <span class="gradient-text-orange">en action</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Une simple demande en langage naturel. L'agent comprend, agit et vous rapporte.
        </p>
      </div>

      <!-- Chat Demo Container -->
      <div class="max-w-3xl mx-auto">
        <div class="demo-container rounded-2xl overflow-hidden border border-slate-200/10">
          <!-- Chat Header -->
          <div class="flex items-center justify-between px-5 py-4 bg-slate-900/80 border-b border-slate-700/50">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <UIcon name="i-lucide-bot" class="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 class="font-semibold text-white text-sm">Agent Comptabilité</h4>
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span class="text-xs text-slate-400">En ligne</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex -space-x-1">
                <div class="w-5 h-5 rounded bg-slate-700 flex items-center justify-center" title="Stripe">
                  <UIcon name="i-simple-icons-stripe" class="w-3 h-3 text-slate-400" />
                </div>
                <div class="w-5 h-5 rounded bg-slate-700 flex items-center justify-center" title="Gmail">
                  <UIcon name="i-simple-icons-gmail" class="w-3 h-3 text-slate-400" />
                </div>
                <div class="w-5 h-5 rounded bg-slate-700 flex items-center justify-center" title="Slack">
                  <UIcon name="i-simple-icons-slack" class="w-3 h-3 text-slate-400" />
                </div>
              </div>
              <span class="text-xs text-slate-500">3 outils</span>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="p-5 space-y-4 min-h-[380px] bg-slate-950">
            <!-- User Message -->
            <Transition name="message">
              <div v-if="messages[0].visible" class="flex justify-end">
                <div class="max-w-[85%] bg-primary/20 border border-primary/30 rounded-2xl rounded-br-md px-4 py-3">
                  <p class="text-sm text-white">{{ messages[0].content }}</p>
                </div>
              </div>
            </Transition>

            <!-- Tool 1: Stripe -->
            <Transition name="message">
              <div v-if="messages[1].visible" class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <UIcon name="i-simple-icons-stripe" class="w-4 h-4 text-[#635BFF]" />
                </div>
                <div class="flex-1">
                  <div class="tool-card rounded-xl px-4 py-3">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-medium text-slate-400">Stripe API</span>
                      <span
                        :class="[
                          'text-xs px-2 py-0.5 rounded-full',
                          messages[1].toolStatus === 'success'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        ]"
                      >
                        {{ messages[1].toolStatus === 'success' ? 'Terminé' : 'En cours...' }}
                      </span>
                    </div>
                    <p class="text-sm text-slate-300">
                      {{ messages[1].toolStatus === 'success' ? messages[1].toolResult : messages[1].content }}
                    </p>
                    <div v-if="messages[1].toolStatus === 'running'" class="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div class="h-full bg-primary animate-loading-bar" />
                    </div>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Tool 2: Gmail -->
            <Transition name="message">
              <div v-if="messages[2].visible" class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <UIcon name="i-simple-icons-gmail" class="w-4 h-4 text-[#EA4335]" />
                </div>
                <div class="flex-1">
                  <div class="tool-card rounded-xl px-4 py-3">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-medium text-slate-400">Gmail API</span>
                      <span
                        :class="[
                          'text-xs px-2 py-0.5 rounded-full',
                          messages[2].toolStatus === 'success'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        ]"
                      >
                        {{ messages[2].toolStatus === 'success' ? 'Terminé' : 'En cours...' }}
                      </span>
                    </div>
                    <p class="text-sm text-slate-300">
                      {{ messages[2].toolStatus === 'success' ? messages[2].toolResult : messages[2].content }}
                    </p>
                    <div v-if="messages[2].toolStatus === 'running'" class="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div class="h-full bg-primary animate-loading-bar" />
                    </div>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Agent Response -->
            <Transition name="message">
              <div v-if="messages[3].visible" class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-bot" class="w-4 h-4 text-primary" />
                </div>
                <div class="max-w-[85%] bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-bl-md px-4 py-3">
                  <div class="text-sm text-slate-200 whitespace-pre-line agent-response">
                    C'est fait ! J'ai envoyé 3 rappels de paiement :

                    <span class="block mt-2 space-y-1">
                      <span class="flex items-center gap-2">
                        <UIcon name="i-lucide-check" class="w-3.5 h-3.5 text-green-500" />
                        <span><strong>TechCorp</strong> - 850€ <span class="text-slate-500">(12j retard)</span></span>
                      </span>
                      <span class="flex items-center gap-2">
                        <UIcon name="i-lucide-check" class="w-3.5 h-3.5 text-green-500" />
                        <span><strong>StartupX</strong> - 1 200€ <span class="text-slate-500">(9j retard)</span></span>
                      </span>
                      <span class="flex items-center gap-2">
                        <UIcon name="i-lucide-check" class="w-3.5 h-3.5 text-green-500" />
                        <span><strong>AgenceDigital</strong> - 400€ <span class="text-slate-500">(8j retard)</span></span>
                      </span>
                    </span>

                    <span class="block mt-3 text-slate-400 text-xs">Je te notifie dès qu'un paiement arrive.</span>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Input Bar (decorative) -->
          <div class="px-5 py-4 bg-slate-900/50 border-t border-slate-700/50">
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-slate-800/50 rounded-xl px-4 py-3 text-sm text-slate-500">
                Demandez quelque chose à votre agent...
              </div>
              <button class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center btn-glow">
                <UIcon name="i-lucide-send" class="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <!-- Caption -->
        <p class="text-center text-sm text-slate-500 mt-6">
          <UIcon name="i-lucide-info" class="w-4 h-4 inline mr-1" />
          Ceci est une simulation. Votre agent effectue vraiment ces actions sur vos outils connectés.
        </p>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.gradient-text-orange {
  background: linear-gradient(135deg, #FF5F1F 0%, #FF8A50 50%, #FF5F1F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-container {
  background: linear-gradient(145deg, rgba(15, 15, 20, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%);
  box-shadow:
    0 0 80px rgba(255, 95, 31, 0.1),
    0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

.tool-card {
  background: linear-gradient(145deg, rgba(30, 30, 40, 0.8) 0%, rgba(20, 20, 30, 0.9) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.btn-glow {
  box-shadow: 0px 0px 20px rgba(255, 95, 31, 0.4);
}

/* Message transitions */
.message-enter-active {
  transition: all 0.4s ease-out;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

/* Loading bar animation */
@keyframes loading-bar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.animate-loading-bar {
  animation: loading-bar 1s ease-out forwards;
}

/* Agent response styling */
.agent-response strong {
  color: white;
}
</style>
