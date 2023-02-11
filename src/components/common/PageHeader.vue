<template>
  <div class="container">
    <div class="row mt-4 mb-4">
      <div class="col">
        <h1 class="text-start">{{ title }}</h1>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <CustomButton icon="bookmark" :border="true" />
        <CustomButton
          class="ms-2"
          icon="plus"
          text="Новый тип"
          :border="true"
        />

        <CustomButton
          class="ms-2"
          icon="plus"
          text="Новый документ"
          :border="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
