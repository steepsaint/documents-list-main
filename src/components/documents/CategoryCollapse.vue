<template>
  <div class="col-md-12">
    <div class="category-collapse">
      <div
        class="category-collapse__header d-flex align-items-center py-2 px-2 border"
      >
        <CustomButton
          class="me-4 button-collapse"
          :class="{ show: show }"
          icon="arrow"
          :border="true"
          @onClick="collapseContent"
        />
        <h2 class="m-0 me-4">{{ title }}</h2>
        <div class="description">{{ desc }}</div>
        <div class="ms-auto d-flex">
          <CustomButton icon="edit" />
          <CustomButton class="ms-2" icon="trash" />
          <CustomButton class="ms-2" icon="move" />
        </div>
      </div>
      <div class="category-collapse__content" v-if="show">
        <div class="row ms-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../common/CustomButton.vue";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    CustomButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  methods: {
    collapseContent() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.category-collapse {
  &__header {
    .button-collapse {
      transition: 0.3s;
      &.show {
        transform: rotate(180deg);
      }
    }

    h2 {
      font-size: 0.95em;
      color: #000;
    }

    .description {
      font-size: 0.7em;
      color: #8e9cbb;
    }
  }
}
</style>
