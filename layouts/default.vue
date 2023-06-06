<template>
    <div>
        <Header />
        <div class="page-content">
            <NuxtPage />
        </div>
       
        
    </div>
</template>

<style>
.page-content {
  @apply max-w-[800px] mx-auto p-4 sm:p-6 lg:p-8 ;
}
</style>