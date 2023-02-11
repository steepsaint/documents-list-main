<template>
  <div>
    <button
      :class="{
        'rounded-pill': text,
        'rounded-circle': !text,
        border: border,
        'border-0': !border,
      }"
      @click="$emit('onClick')"
    >
      <SVGLoader :name="icon" />
      <span v-if="text">{{ text }}</span>
    </button>
  </div>
</template>

<script>
import SVGLoader from "@/components/common/SvgLoader.vue";

export default {
  components: {
    SVGLoader,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-color: #d3d8df;
  background: transparent;
  min-width: 30px;
  min-height: 30px;

  span {
    font-size: 0.75em;
    font-weight: 500;
  }

  &.rounded-circle {
    padding: 2px 8px;
  }

  &.rounded-pill {
    padding: 2px 15px;

    img {
      margin-right: 8px;
      vertical-align: middle;
    }
  }
}
</style>
