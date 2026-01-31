<script setup lang="ts">
const columns = [{
  label: 'Product',
  children: [{
    label: 'Features',
    to: '#features'
  }, {
    label: 'Pricing',
    to: '#pricing'
  }, {
    label: 'Integrations',
    to: '#'
  }, {
    label: 'Changelog',
    to: '#'
  }, {
    label: 'Roadmap',
    to: '#'
  }]
}, {
  label: 'Resources',
  children: [{
    label: 'Documentation',
    to: 'https://docs.botityourself.ai',
    target: '_blank'
  }, {
    label: 'API Reference',
    to: 'https://docs.botityourself.ai/api',
    target: '_blank'
  }, {
    label: 'Tutorials',
    to: '#'
  }, {
    label: 'Blog',
    to: '#'
  }, {
    label: 'Templates',
    to: '#'
  }]
}, {
  label: 'Company',
  children: [{
    label: 'About',
    to: '#'
  }, {
    label: 'Careers',
    to: '#'
  }, {
    label: 'Contact',
    to: '#'
  }, {
    label: 'Press Kit',
    to: '#'
  }]
}, {
  label: 'Legal',
  children: [{
    label: 'Privacy Policy',
    to: '#'
  }, {
    label: 'Terms of Service',
    to: '#'
  }, {
    label: 'Cookie Policy',
    to: '#'
  }, {
    label: 'GDPR',
    to: '#'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: 'Subscribed!',
    description: 'You\'ve been subscribed to our newsletter.',
    color: 'primary'
  })

  setTimeout(() => {
    loading.value = false
    email.value = ''
  }, 1000)
}
</script>

<template>
  <footer class="border-t border-slate-200/10 bg-slate-950">
    <!-- Main Footer Content -->
    <UContainer class="py-16 sm:py-20">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
        <!-- Brand Column -->
        <div class="col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <img src="/logos/biy_logo.png" alt="BotItYourself" class="w-10 h-10">
            <span class="text-xl font-bold text-white">BotItYourself</span>
          </div>
          <p class="text-sm text-slate-400 mb-6 max-w-xs leading-relaxed">
            Automatisez vos tâches répétitives avec des agents IA intelligents. Connectez tous vos outils, gagnez 10h par semaine.
          </p>

          <!-- Newsletter -->
          <form @submit.prevent="onSubmit" class="mb-6">
            <p class="text-sm font-medium text-white mb-3">Stay updated</p>
            <div class="flex gap-2">
              <UInput
                v-model="email"
                type="email"
                placeholder="your@email.com"
                class="flex-1"
                size="sm"
              />
              <UButton
                type="submit"
                size="sm"
                color="primary"
                :loading="loading"
                class="btn-glow"
              >
                Subscribe
              </UButton>
            </div>
          </form>

          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <UButton
              to="https://github.com/botityourself"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="BotItYourSelf on GitHub"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <UButton
              to="https://twitter.com/botityourself"
              target="_blank"
              icon="i-simple-icons-x"
              aria-label="BotItYourSelf on X"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <UButton
              to="https://linkedin.com/company/botityourself"
              target="_blank"
              icon="i-simple-icons-linkedin"
              aria-label="BotItYourSelf on LinkedIn"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <UButton
              to="#"
              target="_blank"
              icon="i-simple-icons-discord"
              aria-label="BotItYourSelf on Discord"
              color="neutral"
              variant="ghost"
              size="sm"
            />
          </div>
        </div>

        <!-- Link Columns -->
        <div
          v-for="column in columns"
          :key="column.label"
          class="col-span-1"
        >
          <h4 class="text-sm font-semibold text-white mb-4">{{ column.label }}</h4>
          <ul class="space-y-3">
            <li v-for="link in column.children" :key="link.label">
              <NuxtLink
                :to="link.to"
                :target="link.target"
                class="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-800">
      <UContainer class="py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-slate-500">
            © {{ new Date().getFullYear() }} BotItYourSelf.AI. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <span class="flex items-center gap-2 text-xs text-slate-500">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
            <NuxtLink to="#" class="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              Status
            </NuxtLink>
            <NuxtLink to="#" class="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              Security
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<style scoped>
.btn-glow {
  box-shadow: 0px 0px 15px rgba(255, 95, 31, 0.25);
}
</style>
