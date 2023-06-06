<template>
    <div>
    <!-- <h1>{{ $t('hektas') }}</h1> -->
    <h1>HEKTAŞ Tarım ve Bilim Deneyim Merkezi</h1>
    <ContentList path="/" v-slot="{ list }">
      <div v-for="label_entry in list" :key="label_entry._path">
        <!-- <NuxtLink :to="localePath(label_entry._path)">{{ label_entry.title }}</NuxtLink> -->
        <NuxtLink :to="label_entry._path">{{ label_entry.title }}</NuxtLink>

      </div>
    </ContentList>
    <ContentDoc path="/1"></ContentDoc>
    </div>
</template>

<script>
export default {
    name: 'LabelPage',
    path: '/',
    
    data() {
        return {
            labels: [],
        }
    },
  async asyncData({ $content, app, error }) {
    // const labels = await $content(app.i18n.locale, 'labels')
    const labels = await $content('labels')

    // .only(['short', 'path'])
      // .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Sayfa bulunamadı.' })
      })
    console.log("labels pulled.")
    this.labels = labels
    // return {
    //   labels: labels.map((labels) => ({
    //     ...labels,
    //     path: labels.path.replace(`/${app.i18n.locale}`, ''),
    //   }))
    // }
  },
}
</script>