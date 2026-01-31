<script setup lang="ts">
const companies = [
  { name: 'TechCorp', initial: 'T' },
  { name: 'StartupX', initial: 'S' },
  { name: 'Enterprise Co', initial: 'E' },
  { name: 'Digital Agency', initial: 'D' },
  { name: 'Growth Lab', initial: 'G' },
  { name: 'Scale Inc', initial: 'S' }
]
</script>

<template>
  <section class="py-12 sm:py-16 border-t border-b border-slate-200/10">
    <UContainer>
      <p class="text-center text-sm uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-8 font-medium">
        Trusted by innovative teams worldwide
      </p>

      <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
        <div
          v-for="company in companies"
          :key="company.name"
          class="flex items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
        >
          <div class="w-8 h-8 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center">
            <span class="text-sm font-bold text-slate-500 dark:text-slate-500">{{ company.initial }}</span>
          </div>
          <span class="text-lg font-semibold tracking-tight">{{ company.name }}</span>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16">
        <div class="text-center">
          <p class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">10,000+</p>
          <p class="text-sm text-slate-500 dark:text-slate-500 mt-1">Agents deployed</p>
        </div>
        <div class="text-center">
          <p class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">500K+</p>
          <p class="text-sm text-slate-500 dark:text-slate-500 mt-1">Tasks automated/day</p>
        </div>
        <div class="text-center">
          <p class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">99.9%</p>
          <p class="text-sm text-slate-500 dark:text-slate-500 mt-1">Uptime SLA</p>
        </div>
        <div class="text-center">
          <p class="text-3xl sm:text-4xl font-bold gradient-text-orange">10h</p>
          <p class="text-sm text-slate-500 dark:text-slate-500 mt-1">Saved per week/user</p>
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
</style>
