<template>
  <div id="app">
    <PageHeader title="Документы" />
    <PageSearch placeholder="Поиск" />
    <PageDocuments />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import PageSearch from "@/components/common/PageSearch.vue";
import PageDocuments from "@/components/views/PageDocuments.vue";
import "@/assets/scss/main.scss";

export default {
  name: "App",
  components: {
    PageHeader,
    PageSearch,
    PageDocuments,
  },
};
</script>

<style lang="scss"></style>
