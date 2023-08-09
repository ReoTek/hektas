<template>
  <main>

    <ContentQuery :path="$route.path" v-slot="{ data }">
      <!-- <ContentRenderer :value="data" /> -->
      <h2 class="text-4xl font-extrabold pb-4">{{ data[1]["title"] }}</h2>
      <ListenButton :recordId="data[1].id" lang="tr"/>
      <p class="">{{ data[1]["description"] }}</p>

      <h4 class="text-2xl  pt-4">English</h4>
      <ListenButton :recordId="data[0].id" lang="en"/>
      <p class="">{{ data[0]["description"] }}</p>
    </ContentQuery>
    
    
  </main>
</template>
  
<!-- <script>
export default {
name: 'LabelSlug',
async asyncData({ $content, params, app, error }) {
    const post = await $content(app.i18n.locale, 'labels', params.id)
    .fetch()
    .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
    })
    return { post }
},
}
</script> -->