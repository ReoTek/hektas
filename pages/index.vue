<template>
  <div>
    
    <h1>HEKTAŞ Tarım ve Bilim Deneyim Merkezi</h1>
    <div v-for="label_entry in labels" :key="label_entry._path">
      <NuxtLink :to="label_entry._path">{{ label_entry.title }}</NuxtLink>
    </div>

  </div>
</template>

<script>
export default {
  name: "LabelPage",
  path: "/",
};
</script>

<script setup>
  const { path } = useRoute();
  const labels = await queryContent('/')
    .where({"_dir": "tr"})
    .only(["_path", "title"])
    .find()
</script>
