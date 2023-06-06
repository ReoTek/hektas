<template>
    <div>
        <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">
        
            <!-- {{ locale.icon }} -->
            <span class="i-mdi-translate text-4xl"></span>
        </NuxtLink>
    </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(l => l.code !== this.$i18n.locale)
    }
  }
}
</script>

