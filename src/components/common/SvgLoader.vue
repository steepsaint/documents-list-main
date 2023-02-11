<template>
  <img :src="image" alt="svg" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: require(`@/assets/icons/${this.name}.svg?inline`),
    };
  },
};
</script>
