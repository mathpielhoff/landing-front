<script setup lang="ts">
const faqs = [
  {
    label: 'Est-ce vraiment sans code ? Je ne suis pas technique.',
    content: 'Oui, 100% sans code. Si vous savez utiliser Slack ou Gmail, vous saurez créer un agent. Notre interface est conçue pour les équipes métier : vous décrivez ce que l\'agent doit faire en français, vous connectez vos outils en quelques clics, et c\'est parti. Nos utilisateurs créent leur premier agent en moins de 5 minutes.',
    defaultOpen: true
  },
  {
    label: 'Mes données sont-elles en sécurité ?',
    content: 'Absolument. Chiffrement bout-en-bout, isolation par équipe, serveurs en Europe (RGPD), et SOC 2 Type II en cours. Vos agents n\'accèdent qu\'aux données que vous autorisez explicitement. Option d\'hébergement sur vos propres serveurs disponible pour les entreprises.',
    defaultOpen: false
  },
  {
    label: 'Que se passe-t-il si l\'IA fait une erreur ?',
    content: 'Vous gardez le contrôle. Les actions sensibles (paiements, suppressions, envois importants) nécessitent votre approbation avant exécution. Vous pouvez aussi définir des règles précises et des limites. L\'IA propose, vous disposez.',
    defaultOpen: false
  },
  {
    label: 'Combien de temps pour voir un ROI ?',
    content: 'La plupart de nos utilisateurs voient des résultats dès la première semaine. Un agent support traite instantanément 80% des demandes récurrentes. Un agent prospection relance vos leads automatiquement. Calculez : 10h/semaine gagnées × votre taux horaire = ROI immédiat.',
    defaultOpen: false
  },
  {
    label: 'Puis-je annuler à tout moment ?',
    content: 'Oui, sans engagement. Commencez gratuitement, upgradez quand vous êtes prêt, annulez quand vous voulez. Pas de frais cachés, pas de piège. Vos données restent exportables à tout moment.',
    defaultOpen: false
  },
  {
    label: 'Quel support est disponible ?',
    content: 'Plan gratuit : documentation complète et communauté Discord active. Plans payants : support par email avec réponse sous 24h. Enterprise : account manager dédié et support 24/7. On ne vous laisse jamais seul.',
    defaultOpen: false
  }
]
</script>

<template>
  <section
    id="faq"
    class="py-20 sm:py-28 relative overflow-hidden"
  >
    <!-- Background Glow -->
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <UBadge variant="subtle" color="primary" class="mb-4">
          <template #leading>
            <UIcon name="i-lucide-help-circle" class="w-3.5 h-3.5" />
          </template>
          FAQ
        </UBadge>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Vous avez des <span class="gradient-text-orange">questions ?</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Les réponses aux objections les plus courantes. Si votre question n'est pas listée, contactez-nous.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-3xl mx-auto">
        <UAccordion
          :items="faqs"
          :ui="{
            wrapper: 'space-y-4',
            item: {
              base: 'border border-slate-200/10 rounded-xl overflow-hidden',
              padding: 'p-5 sm:p-6',
              color: 'bg-slate-900/30 dark:bg-slate-900/50'
            },
            trigger: {
              base: 'text-left font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors'
            },
            content: {
              base: 'text-slate-600 dark:text-slate-400 leading-relaxed pt-4'
            }
          }"
          multiple
        />
      </div>

      <!-- CTA After FAQ -->
      <div class="text-center mt-12">
        <p class="text-slate-500 dark:text-slate-500 mb-4">
          Encore des questions ?
        </p>
        <UButton
          to="#"
          variant="outline"
          color="neutral"
          size="lg"
        >
          <template #leading>
            <UIcon name="i-lucide-message-circle" class="w-4 h-4" />
          </template>
          Contactez-nous
        </UButton>
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
