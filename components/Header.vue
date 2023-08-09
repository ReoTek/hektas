<template>
<nav class="flex px-6 border-b-2 border-gray-100">
  <div class="flex justify-between max-w-[800px] mx-auto w-full p-2">
    <div class="flex items-center">
      <a href="/" class="flex items-center">
        <span class="px-2"><img src="/logo.png" alt="Logo" width="48" height="48"></span>
        <span class="text-lg font-bold px-2">HEKTAŞ Tarım ve Bilim Deneyim Merkezi</span>
      </a>

    </div>
    <div class="flex items-center">
      <!-- <LanguageSwitcher /> -->
      <!-- <a class="theme-switcher" @click="toggleTheme"><span class="i-mdi-theme-light-dark text-4xl"></span></a> -->
    </div>
  </div>

</nav>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      toggleLanguage() {
        this.$emit('toggle-language');
      },
      toggleTheme() {
        this.$emit('toggle-theme');
      },
    },
  }
</script>