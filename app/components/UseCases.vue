<script setup lang="ts">
import { ref, onMounted } from 'vue'

const appear = ref(false)

// Use cases par industrie/fonction
const useCases = [
  {
    title: 'Support Client',
    description: 'Répondez automatiquement aux questions fréquentes 24/7',
    icon: 'i-heroicons-chat-bubble-left-right',
    gradient: 'from-blue-500 to-cyan-500',
    example: 'Réduction de 70% du volume de tickets',
    tags: ['Zendesk', 'Intercom', 'Slack']
  },
  {
    title: 'Onboarding SaaS',
    description: 'Créez des espaces personnalisés pour chaque nouveau client',
    icon: 'i-heroicons-user-plus',
    gradient: 'from-purple-500 to-pink-500',
    example: 'Temps d\'onboarding divisé par 4',
    tags: ['Stripe', 'Notion', 'Email']
  },
  {
    title: 'Prospection Commerciale',
    description: 'Qualifiez et enrichissez vos leads automatiquement',
    icon: 'i-heroicons-funnel',
    gradient: 'from-green-500 to-emerald-500',
    example: '3x plus de leads qualifiés',
    tags: ['HubSpot', 'LinkedIn', 'CRM']
  },
  {
    title: 'Recrutement RH',
    description: 'Pré-sélectionnez les candidats et planifiez les entretiens',
    icon: 'i-heroicons-user-group',
    gradient: 'from-orange-500 to-red-500',
    example: '50% de temps gagné en tri de CV',
    tags: ['Gmail', 'Calendar', 'ATS']
  }
]

onMounted(() => {
  appear.value = true
})
</script>

<template>
  <UContainer class="py-16">
    <!-- Titre de la section -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Des <span class="text-primary">cas d'usage concrets</span> pour chaque métier
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Découvrez comment BotItYourself automatise les tâches répétitives dans différents départements
      </p>
    </div>

    <!-- Grille de use cases -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(useCase, index) in useCases"
        :key="useCase.title"
        class="use-case-card group relative"
        :class="appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <!-- Gradient background animé -->
        <div
          class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
          :class="useCase.gradient"
        />

        <!-- Contenu -->
        <div class="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
          <!-- Icône -->
          <div class="mb-4">
            <div
              class="inline-flex p-3 rounded-lg bg-gradient-to-br"
              :class="useCase.gradient"
            >
              <UIcon :name="useCase.icon" class="w-6 h-6 text-white" />
            </div>
          </div>

          <!-- Titre -->
          <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
            {{ useCase.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
            {{ useCase.description }}
          </p>

          <!-- Résultat -->
          <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <div class="flex items-start gap-2">
              <UIcon name="i-heroicons-chart-bar-square" class="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
              <p class="text-xs font-semibold text-primary-700 dark:text-primary-300">
                {{ useCase.example }}
              </p>
            </div>
          </div>

          <!-- Tags intégrations -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in useCase.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA en dessous -->
    <div class="text-center mt-12">
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Et bien d'autres cas d'usage : comptabilité, marketing, logistique, IT support...
      </p>
      <UButton
        label="Voir tous les cas d'usage"
        variant="outline"
        color="primary"
        size="lg"
        trailing-icon="i-heroicons-arrow-right"
      />
    </div>
  </UContainer>
</template>

<style scoped>
.use-case-card {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.use-case-card:hover {
  transform: translateY(-4px);
}
</style>
