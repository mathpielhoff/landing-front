<script setup lang="ts">
interface FeatureItem {
  problem: string
  solution: string
  description: string
  icon: string
  size: 'large' | 'medium' | 'small'
}

const props = defineProps<{
  title: string
  description: string
  items: FeatureItem[]
}>()
</script>

<template>
  <section id="features" class="py-20 sm:py-28 relative overflow-hidden">
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <MDC :value="title" unwrap="p" />
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <!-- Large Card (spans 2 columns) -->
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'bento-card p-6 sm:p-8 group',
            item.size === 'large' ? 'md:col-span-2 lg:col-span-2' : '',
            item.size === 'medium' ? 'lg:row-span-1' : ''
          ]"
        >
          <!-- Problem Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span class="text-xs font-medium text-red-400">{{ item.problem }}</span>
          </div>

          <!-- Icon & Solution -->
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <UIcon :name="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ item.solution }}
              </h3>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Visual Indicator for Large Cards -->
          <div v-if="item.size === 'large'" class="mt-6 pt-6 border-t border-slate-200/10">
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-green-500" />
                Actif 24/7
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-green-500" />
                Multi-langues
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-green-500" />
                Escalade intelligente
              </span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.bento-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.bento-card:hover {
  border-color: rgba(255, 95, 31, 0.3);
  box-shadow: 0 0 40px rgba(255, 95, 31, 0.1);
  transform: translateY(-2px);
}

/* Light mode adjustments */
:not(.dark) .bento-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
</style>
