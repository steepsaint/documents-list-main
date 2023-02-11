<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-md-6">
        <div class="search-wrap">
          <SvgLoader class="search-wrap__icon" name="search" />
          <input
            :class="{ focused: value }"
            type="text"
            v-model="value"
            :placeholder="placeholder"
          />
          <CustomButton
            v-if="value"
            class="search-wrap__reset"
            icon="delete"
            :border="false"
            @onClick="inputReset"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgLoader from "./SvgLoader.vue";
import CustomButton from "./CustomButton.vue";

export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    SvgLoader,
    CustomButton,
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    inputReset() {
      this.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrap {
  padding: 0;
  position: relative;

  &__icon {
    position: absolute;
    bottom: 31%;
  }

  input {
    width: 100%;
    padding: 10px 35px;
    outline: none;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #bfc9e0;
    font-size: 0.95em;
    color: #000;

    &::placeholder {
      color: #8e9cbb;
      font-style: italic;
    }

    &:focus,
    &.focused {
      border-color: #0066ff;
    }
  }

  &__reset {
    position: absolute;
    right: 0;
    bottom: 20%;
  }
}
</style>
