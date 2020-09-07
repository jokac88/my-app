<template>
  <b-button @click="toggle" :class="{ 'is-active': isToggle }" class="hamburger hamburger--spin">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </b-button>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    toggle() {
      this.$store.commit("store/SET_TOGGLE");
    },
  },
  computed: mapState({
    isToggle: (state) => state.store.isToggle,
  }),
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
    background-color: var(--bg);
    height: 3px;
    transition: $transition-2 !important;
  }
}
</style>