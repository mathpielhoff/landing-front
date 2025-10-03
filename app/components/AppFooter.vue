<script setup lang="ts">
const columns = [{
  label: 'Produit',
  children: [{
    label: 'Features',
    to: '#features'
  }, {
    label: 'Pricing',
    to: '#pricing'
  }, {
    label: 'Roadmap',
    to: '#'
  }, {
    label: 'Changelog',
    to: '#'
  }]
}, {
  label: 'Ressources',
  children: [{
    label: 'Documentation',
    to: 'https://docs.botityourself.ai',
    target: '_blank'
  }, {
    label: 'API Reference',
    to: 'https://docs.botityourself.ai/api',
    target: '_blank'
  }, {
    label: 'Tutoriels',
    to: '#'
  }, {
    label: 'Blog',
    to: '#'
  }]
}, {
  label: 'Entreprise',
  children: [{
    label: 'À propos',
    to: '#'
  }, {
    label: 'Contact',
    to: '#'
  }, {
    label: 'Politique de confidentialité',
    to: '#'
  }, {
    label: 'CGU',
    to: '#'
  }]
}, {
  label: 'Communauté',
  children: [{
    label: 'GitHub',
    to: 'https://github.com/botityourself',
    target: '_blank'
  }, {
    label: 'Discord',
    to: '#'
  }, {
    label: 'Twitter/X',
    to: '#'
  }, {
    label: 'LinkedIn',
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
    description: 'You\'ve been subscribed to our newsletter.'
  })
}
</script>

<template>
  <USeparator
    icon="i-lucide-bot"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="Restez informé des nouveautés"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Votre email"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      label="S'inscrire"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} BotItYourSelf.AI - All rights reserved
      </p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/botityourself"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="BotItYourSelf on GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://twitter.com/botityourself"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="BotItYourSelf on X"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://linkedin.com/company/botityourself"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="BotItYourSelf on LinkedIn"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
