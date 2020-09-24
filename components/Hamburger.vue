<template>
  <b-button
    @click="toggle"
    :class="{ 'is-active': isToggle }"
    class="hamburger hamburger--spin"
  >
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 50px;
  height: 50px;
  background-color: transparent !important;

  &:hover {
    opacity: 1;
  }

  &-inner,
  &-inner:before,
  &-inner:after {
    background-color: var(--color-left);
    height: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: $transition-2 !important;
    -moz-transition: $transition-2 !important;
    -o-transition: $transition-2 !important;
    -ms-transition: $transition-2 !important;
    transition: $transition-2 !important;
  }
}
</style>