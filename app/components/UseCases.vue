<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')

// 4 cas d'usage les plus pertinents et impactants
const useCases = [
  {
    title: 'Support Client 24/7',
    description: 'Répondez automatiquement aux questions fréquentes de vos clients à toute heure. L\'IA gère les demandes simples et escalade les cas complexes.',
    icon: 'i-heroicons-chat-bubble-left-right',
    gradient: 'from-blue-500 to-cyan-500',
    example: '-70% de tickets',
    impact: 'ROI en 2 semaines',
    tags: ['Zendesk', 'Intercom', 'Slack']
  },
  {
    title: 'Prospection Commerciale',
    description: 'Qualifiez automatiquement vos leads, enrichissez leurs données et programmez des suivis personnalisés sans effort.',
    icon: 'i-heroicons-funnel',
    gradient: 'from-green-500 to-emerald-500',
    example: '3x leads qualifiés',
    impact: '+150% conversion',
    tags: ['HubSpot', 'LinkedIn', 'Salesforce']
  },
  {
    title: 'Onboarding Client',
    description: 'Créez des espaces Notion personnalisés, envoyez les bons emails et suivez la progression de chaque nouveau client.',
    icon: 'i-heroicons-user-plus',
    gradient: 'from-purple-500 to-pink-500',
    example: 'Temps divisé par 4',
    impact: 'Satisfaction +40%',
    tags: ['Stripe', 'Notion', 'Email']
  },
  {
    title: 'Gestion Comptable',
    description: 'Automatisez la saisie des factures, la réconciliation bancaire et générez vos rapports financiers en un clic.',
    icon: 'i-heroicons-calculator',
    gradient: 'from-indigo-500 to-blue-500',
    example: '-80% saisie manuelle',
    impact: '15h gagnées/mois',
    tags: ['QuickBooks', 'Xero', 'Excel']
  }
]

// Filtrage des cas d'usage selon la recherche
const filteredUseCases = computed(() => {
  if (!searchQuery.value) {
    return useCases
  }

  const query = searchQuery.value.toLowerCase()

  return useCases.filter(useCase => {
    const matchTitle = useCase.title.toLowerCase().includes(query)
    const matchDescription = useCase.description.toLowerCase().includes(query)
    const matchTags = useCase.tags.some(tag => tag.toLowerCase().includes(query))
    return matchTitle || matchDescription || matchTags
  })
})
</script>

<template>
  <UContainer class="py-16">
    <!-- Titre de la section -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Des <span class="text-primary">cas d'usage concrets</span> qui transforment votre quotidien
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Découvrez comment les équipes utilisent BotItYourself pour gagner des heures chaque semaine
      </p>
    </div>

    <!-- Grid de cards modernes -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      <TransitionGroup name="card">
        <div
          v-for="useCase in filteredUseCases"
          :key="useCase.title"
          class="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
        >
          <!-- Gradient background animé -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br"
            :class="useCase.gradient"
          />

          <!-- Contenu de la card -->
          <div class="relative z-10">
            <!-- Header avec icône et titre -->
            <div class="flex items-start gap-4 mb-4">
              <div
                class="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-300"
                :class="useCase.gradient"
              >
                <UIcon :name="useCase.icon" class="w-6 h-6 text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {{ useCase.title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
                    <UIcon name="i-heroicons-arrow-trending-up" class="w-3.5 h-3.5" />
                    {{ useCase.example }}
                  </span>
                  <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
                    • {{ useCase.impact }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {{ useCase.description }}
            </p>

            <!-- Tags intégrations -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in useCase.tags"
                :key="tag"
                class="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-colors"
              >
                <UIcon name="i-heroicons-check-circle" class="w-3 h-3" />
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Badge corner décoratif -->
          <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5 text-primary-400" />
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Message si aucun résultat -->
    <div
      v-if="filteredUseCases.length === 0"
      class="text-center py-16"
    >
      <UIcon name="i-heroicons-magnifying-glass" class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
      <p class="text-gray-600 dark:text-gray-400 font-semibold text-lg mb-2">
        Aucun cas d'usage trouvé
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-500">
        Essayez avec "support", "vente", "Slack"...
      </p>
    </div>

    <!-- Call to action en bas -->
    <div class="text-center mt-12">
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span class="font-semibold text-primary-600 dark:text-primary-400">Et des centaines d'autres possibilités</span> avec 1000+ intégrations disponibles
      </p>
    </div>
  </UContainer>
</template>

<style scoped>
/* Animations pour les cards */
.card-enter-active,
.card-leave-active {
  transition: all 0.4s ease;
}

.card-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.card-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.card-move {
  transition: transform 0.4s ease;
}
</style>
