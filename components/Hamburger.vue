<template>
  <b-button
    @click="toggle = !toggle"
    :class="{ 'is-active': toggle }"
    class="hamburger hamburger--spin"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </b-button>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style lang="scss">
.hamburger {
  padding: 0;
  height: 25px;
  background-color: transparent !important;

  &:hover {
    opacity: 1;
  }

  &-box {
    height: 25px;
  }

  &-inner,
  &-inner:before,
  &-inner:after {
    background-color: $white;
    height: 3px;
  }
}
</style>