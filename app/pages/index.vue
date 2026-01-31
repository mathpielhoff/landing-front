<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title || 'BotItYourSelf.AI',
  ogTitle: page.value?.seo?.title || page.value?.title || 'BotItYourSelf.AI',
  description: page.value?.seo?.description || page.value?.description || 'Créez vos agents IA',
  ogDescription: page.value?.seo?.description || page.value?.description || 'Créez vos agents IA'
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <!-- Hero Banner animée "Bot X Yourself" - En premier -->
    <UContainer class="pb-12 sm:pb-16 md:pb-20">
      <AnimatedHeroBanner />
    </UContainer>

    <UPageHero
      :ui="{
        container: 'pt-8 sm:pt-12 md:pt-18 lg:pt-20 px-4',
        title: 'max-w-4xl mx-auto'
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-hero tracking-tight text-gray-900 dark:text-white">
          <MDC
            :value="page.title"
            unwrap="p"
          />
        </h1>
      </template>

      <template #description>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ page.description }}
        </p>

        <!-- Primary CTA with Glow -->
        <div class="flex flex-col items-center gap-4 mb-6">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              :to="page.hero.cta.primary.to"
              size="xl"
              color="primary"
              class="btn-glow btn-mobile px-8 py-4 text-lg font-semibold"
            >
              {{ page.hero.cta.primary.label }}
              <template #trailing>
                <UIcon :name="page.hero.cta.primary.icon" class="w-5 h-5" />
              </template>
            </UButton>
            <UButton
              :to="page.hero.cta.secondary.to"
              size="xl"
              variant="outline"
              color="neutral"
              class="btn-mobile px-8 py-4 text-lg"
            >
              <template #leading>
                <UIcon :name="page.hero.cta.secondary.icon" class="w-5 h-5" />
              </template>
              {{ page.hero.cta.secondary.label }}
            </UButton>
          </div>

          <!-- Micro-copy -->
          <p class="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-2">
            <UIcon name="i-lucide-shield-check" class="w-4 h-4 text-green-500" />
            {{ page.hero.microcopy }}
          </p>
        </div>

        <!-- Key Differentiators Badges -->
        <div class="flex flex-wrap gap-2 sm:gap-3 justify-center mt-8">
          <UBadge
            v-for="(badge, index) in page.hero.badges"
            :key="index"
            size="lg"
            variant="subtle"
            color="primary"
            class="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm"
          >
            <template #leading>
              <UIcon
                :name="badge.icon"
                class="w-3.5 h-3.5 sm:w-4 sm:h-4"
              />
            </template>
            {{ badge.label }}
          </UBadge>
        </div>
      </template>
    </UPageHero>

    <!-- Social Proof - Trusted By Section -->
    <TrustedBy />

    <!-- Interactive Agent Demo -->
    <AgentDemo />

    <!-- Bento Grid Features - Problem/Solution Pairs -->
    <BentoFeatures
      :title="page.features.title"
      :description="page.features.description"
      :items="page.features.items"
    />

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 sm:py-28 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <UContainer>
        <!-- Section Header -->
        <div class="text-center mb-12 sm:mb-16">
          <UBadge variant="subtle" color="primary" class="mb-4">
            <template #leading>
              <UIcon name="i-lucide-credit-card" class="w-3.5 h-3.5" />
            </template>
            Pricing
          </UBadge>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <MDC :value="page.pricing.title" unwrap="p" />
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {{ page.pricing.description }}
          </p>
        </div>

        <!-- Pricing Cards -->
        <UPricingPlans scale>
          <UPricingPlan
            v-for="(plan, index) in page.pricing.plans"
            :key="index"
            :title="plan.title"
            :description="plan.description"
            :price="plan.price"
            :billing-period="plan.billing_period"
            :billing-cycle="plan.billing_cycle"
            :highlight="plan.highlight"
            :scale="plan.highlight"
            variant="soft"
            :features="plan.features"
            :button="plan.button"
            :class="plan.highlight ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''"
          />
        </UPricingPlans>

        <!-- Trust Elements -->
        <div class="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-slate-500">
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-shield-check" class="w-4 h-4 text-green-500" />
            Secure payment
          </span>
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-refresh-cw" class="w-4 h-4 text-green-500" />
            Cancel anytime
          </span>
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-headphones" class="w-4 h-4 text-green-500" />
            Priority support
          </span>
        </div>
      </UContainer>
    </section>

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Final CTA Section -->
    <section class="py-20 sm:py-28 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />

      <UContainer class="relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <MDC :value="page.cta.title" unwrap="p" />
          </h2>
          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8">
            {{ page.cta.description }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <UButton
              :to="page.cta.links[0].to"
              size="xl"
              color="primary"
              class="btn-glow btn-mobile px-8 py-4 text-lg font-semibold"
            >
              {{ page.cta.links[0].label }}
              <template #trailing>
                <UIcon :name="page.cta.links[0].trailingIcon" class="w-5 h-5" />
              </template>
            </UButton>
            <UButton
              :to="page.cta.links[1].to"
              size="xl"
              :variant="page.cta.links[1].variant"
              color="neutral"
              class="btn-mobile px-8 py-4 text-lg"
            >
              <template #leading>
                <UIcon :name="page.cta.links[1].icon" class="w-5 h-5" />
              </template>
              {{ page.cta.links[1].label }}
            </UButton>
          </div>

          <!-- Micro-copy -->
          <p class="text-sm text-slate-500 dark:text-slate-500">
            {{ page.cta.microcopy }}
          </p>
        </div>
      </UContainer>

      <!-- Stars Background -->
      <LazyStarsBg />
    </section>
  </div>
</template>
