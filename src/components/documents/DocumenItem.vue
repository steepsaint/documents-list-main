<template>
  <div class="col-md-12">
    <div
      class="document-item d-flex align-items-center py-1 px-1 border"
      :class="{ disabled: !status }"
    >
      <h3 class="m-0 mx-4">{{ name }}</h3>
      <span class="me-4 required" v-if="required">Обязателен</span>
      <div class="description">{{ desc }}</div>
      <div class="ms-auto d-flex">
        <CustomButton icon="edit" />
        <CustomButton class="ms-2" icon="trash" />
        <CustomButton class="ms-2" icon="move" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../common/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.document-item {
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  h3 {
    font-size: 0.8em;
    color: #000;
  }
  span {
    font-size: 0.7em;

    &.required {
      color: #ff238d;
    }
  }
  .description {
    font-size: 0.7em;
    color: #8e9cbb;
  }
}
</style>
