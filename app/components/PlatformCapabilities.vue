<script setup lang="ts">
const capabilities = [
  {
    icon: 'i-lucide-sliders-horizontal',
    title: 'Agents sur-mesure',
    description: 'Définissez le ton, les instructions et la personnalité de chaque agent. Formel pour le support, persuasif pour la vente, pédagogue pour l\'onboarding.',
    highlights: ['Ton & personnalité', 'Instructions précises', 'Base de connaissances dédiée'],
    color: 'primary'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Approbation humaine',
    description: 'Gardez le contrôle sur les actions sensibles. Chaque outil peut être placé sous validation humaine avant exécution : paiements, envois, suppressions.',
    highlights: ['Actions sous contrôle', 'Validation en un clic', 'Règles personnalisables'],
    color: 'green'
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Isolation par équipe',
    description: 'Chaque équipe dispose de ses propres agents, données et configurations. Marketing, Support, Finance : tout est cloisonné et sécurisé.',
    highlights: ['Espaces séparés', 'Permissions granulaires', 'Multi-organisations'],
    color: 'blue'
  }
]

const colorClasses: Record<string, { icon: string; border: string; highlight: string; bg: string }> = {
  primary: {
    icon: 'text-primary bg-primary/10 border-primary/20',
    border: 'hover:border-primary/40',
    highlight: 'text-primary/80',
    bg: 'bg-primary/5'
  },
  green: {
    icon: 'text-green-500 bg-green-500/10 border-green-500/20',
    border: 'hover:border-green-500/40',
    highlight: 'text-green-500/80',
    bg: 'bg-green-500/5'
  },
  blue: {
    icon: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    border: 'hover:border-blue-500/40',
    highlight: 'text-blue-500/80',
    bg: 'bg-blue-500/5'
  }
}
</script>

<template>
  <section class="py-20 sm:py-28 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-14">
        <UBadge variant="subtle" color="primary" class="mb-4">
          <template #leading>
            <UIcon name="i-lucide-layers" class="w-3.5 h-3.5" />
          </template>
          Plateforme
        </UBadge>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Conçue pour les équipes qui veulent <span class="gradient-text-orange">garder le contrôle</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Personnalisez vos agents, contrôlez leurs actions et organisez vos équipes. Tout en un.
        </p>
      </div>

      <!-- Capabilities Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="cap in capabilities"
          :key="cap.title"
          :class="[
            'capability-card group p-6 sm:p-8 rounded-2xl border transition-all duration-300',
            colorClasses[cap.color].border
          ]"
        >
          <!-- Icon -->
          <div
            :class="[
              'w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110',
              colorClasses[cap.color].icon
            ]"
          >
            <UIcon :name="cap.icon" class="w-6 h-6" />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ cap.title }}
          </h3>

          <!-- Description -->
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 text-sm">
            {{ cap.description }}
          </p>

          <!-- Highlights -->
          <div class="space-y-2.5">
            <div
              v-for="highlight in cap.highlights"
              :key="highlight"
              class="flex items-center gap-2.5 text-sm"
            >
              <UIcon name="i-lucide-check" :class="['w-4 h-4 shrink-0', colorClasses[cap.color].highlight]" />
              <span class="text-slate-600 dark:text-slate-300">{{ highlight }}</span>
            </div>
          </div>
        </div>
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

/* Light mode */
.capability-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.capability-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

/* Dark mode */
:root.dark .capability-card,
.dark .capability-card {
  background: linear-gradient(145deg, rgba(30, 30, 35, 0.9) 0%, rgba(20, 20, 25, 0.85) 100%);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

:root.dark .capability-card:hover,
.dark .capability-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
</style>
