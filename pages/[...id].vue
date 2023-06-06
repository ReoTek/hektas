<template>
  <main>

    <ContentQuery :path="$route.path" v-slot="{ data }">
      <!-- <ContentRenderer :value="data" /> -->
      <h2 class="text-4xl font-extrabold dark:text-white pb-4">{{ data[0]["title"] }}</h2>
      <ListenButton/>
    </ContentQuery>
    <ContentDoc :path="$route.path"/>
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