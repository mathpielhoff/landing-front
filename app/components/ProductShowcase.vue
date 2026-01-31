<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <section id="demo" class="py-20 sm:py-28 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
    </div>

    <UContainer class="relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <UBadge variant="subtle" color="primary" class="mb-4">
          <template #leading>
            <UIcon name="i-lucide-sparkles" class="w-3.5 h-3.5" />
          </template>
          Interface intuitive
        </UBadge>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Puissant. <span class="gradient-text-orange">Simple.</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Une interface pensée pour les équipes métier, pas pour les développeurs.
          Créez votre premier agent en moins de 5 minutes.
        </p>
      </div>

      <!-- Mockup Container with Overlapping Effect -->
      <div
        :class="[
          'relative max-w-5xl mx-auto transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        ]"
      >
        <!-- Main Dashboard Mockup -->
        <div class="showcase-glow rounded-2xl overflow-hidden border border-slate-200/10 bg-slate-900">
          <!-- Browser Header -->
          <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-500/80" />
              <div class="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div class="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div class="flex-1 flex justify-center">
              <div class="px-4 py-1 rounded-md bg-slate-700/50 text-xs text-slate-400">
                app.botityourself.ai
              </div>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="p-6 sm:p-8">
            <!-- Top Bar -->
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <UIcon name="i-lucide-bot" class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold text-white">Support Agent</h4>
                  <p class="text-xs text-slate-400">Active - 247 conversations today</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span class="text-xs text-green-400">Online</span>
                </span>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p class="text-2xl font-bold text-white">2,847</p>
                <p class="text-xs text-slate-400">Messages today</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p class="text-2xl font-bold text-green-400">94%</p>
                <p class="text-xs text-slate-400">Resolution rate</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p class="text-2xl font-bold text-primary">1.2s</p>
                <p class="text-xs text-slate-400">Avg response</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p class="text-2xl font-bold text-white">4.9</p>
                <p class="text-xs text-slate-400">User rating</p>
              </div>
            </div>

            <!-- Activity Preview -->
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30">
                <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <UIcon name="i-lucide-user" class="w-4 h-4 text-blue-400" />
                </div>
                <div class="flex-1">
                  <p class="text-sm text-white">New ticket resolved automatically</p>
                  <p class="text-xs text-slate-500">2 minutes ago</p>
                </div>
                <span class="px-2 py-1 rounded text-xs bg-green-500/10 text-green-400">Auto-resolved</span>
              </div>
              <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <UIcon name="i-lucide-mail" class="w-4 h-4 text-primary" />
                </div>
                <div class="flex-1">
                  <p class="text-sm text-white">Follow-up email sent to prospect</p>
                  <p class="text-xs text-slate-500">5 minutes ago</p>
                </div>
                <span class="px-2 py-1 rounded text-xs bg-primary/10 text-primary">Automated</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Card - Approval Request (Overlapping) -->
        <div
          :class="[
            'absolute -right-4 sm:right-8 top-1/4 w-72 p-4 rounded-xl bg-slate-800 border border-slate-700/50 shadow-2xl transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          ]"
        >
          <div class="flex items-start gap-3 mb-3">
            <div class="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
              <UIcon name="i-lucide-shield-alert" class="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <p class="text-sm font-medium text-white">Approval Required</p>
              <p class="text-xs text-slate-400">Payment of 2,500 EUR</p>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="flex-1 px-3 py-2 rounded-lg bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition-colors">
              Approve
            </button>
            <button class="flex-1 px-3 py-2 rounded-lg bg-slate-700 text-slate-300 text-xs font-medium hover:bg-slate-600 transition-colors">
              Deny
            </button>
          </div>
        </div>

        <!-- Floating Card - Integration (Overlapping Left) -->
        <div
          :class="[
            'absolute -left-4 sm:left-8 bottom-1/4 w-64 p-4 rounded-xl bg-slate-800 border border-slate-700/50 shadow-2xl transition-all duration-1000 delay-500',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          ]"
        >
          <p class="text-xs text-slate-400 mb-3">Connected Tools</p>
          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700/50 text-xs text-slate-300">
              <UIcon name="i-simple-icons-slack" class="w-3 h-3" /> Slack
            </span>
            <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700/50 text-xs text-slate-300">
              <UIcon name="i-simple-icons-notion" class="w-3 h-3" /> Notion
            </span>
            <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700/50 text-xs text-slate-300">
              <UIcon name="i-simple-icons-stripe" class="w-3 h-3" /> Stripe
            </span>
            <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700/50 text-xs text-slate-300">
              +12 more
            </span>
          </div>
        </div>
      </div>

      <!-- CTA Below Showcase -->
      <div class="text-center mt-12">
        <UButton
          to="#pricing"
          size="lg"
          color="primary"
          class="btn-glow"
        >
          Essayer Gratuitement
          <template #trailing>
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </template>
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.showcase-glow {
  box-shadow:
    0 0 60px rgba(255, 95, 31, 0.15),
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.gradient-text-orange {
  background: linear-gradient(135deg, #FF5F1F 0%, #FF8A50 50%, #FF5F1F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hide floating cards on very small screens */
@media (max-width: 640px) {
  .absolute.-right-4,
  .absolute.-left-4 {
    display: none;
  }
}
</style>
