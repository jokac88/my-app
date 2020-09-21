<template>
  <transition name="fade">
    <section class="close-nav d-md-none" @click="toggle" :class="{ active : isToggle }"></section>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    toggle() {
      if (this.isToggle) {
        this.$store.commit("store/SET_TOGGLE");
      }
    },
  },
  computed: mapState({
    isToggle: (state) => state.store.isToggle,
  }),
};
</script>

<style lang="scss">
.close-nav {
  position: fixed;
  top: 55px;
  left: 0;
  width: 100%;
  height: 100vh;
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;
  z-index: 4;
  background-color: $black;
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, 0, 0);

  &.active {
    transform: translate3d(80%, 0, 0);
    opacity: 0.6;
    visibility: visible;

    @include media-breakpoint-only(sm) {
      transform: translate3d(60%, 0, 0);
    }
  }
}
</style>