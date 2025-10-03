<script setup lang="ts">
const faqs = [
  {
    label: 'Comment connecter mes applications préférées ?',
    content: 'C\'est très simple ! Nous proposons plus de 1000 intégrations prêtes à l\'emploi : GitHub, Slack, Notion, votre CRM, vos bases de données... Vous sélectionnez les outils dont vous avez besoin et votre agent peut immédiatement les utiliser. Pas de code requis.',
    defaultOpen: false
  },
  {
    label: 'Puis-je utiliser mon propre abonnement IA (OpenAI, Claude...) ?',
    content: 'Oui ! Vous pouvez utiliser vos propres clés API pour tous les modèles IA. Vos tokens sont chiffrés et sécurisés. Vous gardez le contrôle total sur vos coûts et vos données.',
    defaultOpen: false
  },
  {
    label: 'Comment fonctionnent les espaces d\'équipe ?',
    content: 'Chaque équipe a son propre espace isolé avec ses agents et ses données. Vous pouvez créer plusieurs équipes (par exemple : Marketing, Ventes, Support...) et partager vos agents uniquement avec les personnes concernées. Les données restent privées et sécurisées.',
    defaultOpen: false
  },
  {
    label: 'Mes conversations sont-elles sauvegardées ?',
    content: 'Oui, toutes vos conversations avec vos agents sont automatiquement sauvegardées et consultables. La durée de conservation dépend de votre plan (6h pour Starter, 24h pour Professional, personnalisable pour Enterprise).',
    defaultOpen: false
  },
  {
    label: 'Puis-je installer BotItYourSelf sur mes propres serveurs ?',
    content: 'Oui, avec le plan Enterprise. Nous vous fournissons tout le nécessaire pour installer la plateforme sur votre infrastructure (AWS, Google Cloud, Azure, serveurs privés...). Vous gardez le contrôle total de vos données avec notre support technique dédié.',
    defaultOpen: false
  },
  {
    label: 'Quels modèles IA sont disponibles ?',
    content: 'Vous avez accès à plus de 10 modèles IA leaders : GPT-4 et o1 d\'OpenAI, Claude d\'Anthropic, Mistral AI, Google Gemini, Groq... Testez-les et choisissez celui qui fonctionne le mieux pour votre cas d\'usage. Nous ajoutons régulièrement de nouveaux modèles.',
    defaultOpen: false
  }
]
</script>

<template>
  <UPageSection
    id="faq"
    class="relative overflow-hidden"
  >
    <!-- Ligne décorative désactivée -->
    <!-- <template #headline>
      <UColorModeImage
        light="/images/light/line-5.svg"
        dark="/images/dark/line-5.svg"
        class="absolute -top-10 sm:top-0 right-1/2 h-24"
      />
    </template> -->

    <template #title>
      <span class="text-3xl sm:text-4xl font-bold">
        Questions <span class="text-primary">Fréquentes</span>
      </span>
    </template>

    <template #description>
      <p class="text-lg text-muted max-w-2xl mx-auto">
        Toutes les réponses aux questions que vous vous posez sur BotItYourSelf.AI
      </p>
    </template>

    <UContainer class="mt-12">
      <UAccordion
        :items="faqs"
        :ui="{
          wrapper: 'max-w-3xl mx-auto',
          item: {
            base: 'mb-4',
            padding: 'p-5',
            rounded: 'rounded-lg',
            color: 'bg-accented'
          }
        }"
        multiple
      />
    </UContainer>
  </UPageSection>
</template>
