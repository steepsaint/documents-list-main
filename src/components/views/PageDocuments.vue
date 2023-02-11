<template>
  <div class="container">
    <div class="row">
      <CategoryCollapse
        title="Обязательные для всех"
        desc="Документы, обязательные для всех сотрудников без исключения"
      />

      <DroggableWrap />
    </div>
  </div>
</template>

<script>
import CategoryCollapse from "@/components/documents/CategoryCollapse.vue";
import DroggableWrap from "@/components/documents/DroggableWrap.vue";

export default {
  components: {
    CategoryCollapse,
    DroggableWrap,
  },
};
</script>
