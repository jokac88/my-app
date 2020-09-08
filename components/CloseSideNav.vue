<template>
  <section class="close-nav d-md-none" @click="toggle" :class="isToggle ? 'active' : 'no-active'"></section>
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
  top: 50px;
  left: 0;
  width: 0;
  height: 100vh;
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;
  z-index: 3;

  &.active {
    width: 100%;
    transform: translate3d(80%, 0, 0);
    background-color: rgba($black, 0.6);

    @include media-breakpoint-only(sm) {
      transform: translate3d(60%, 0, 0);
    }
  }

  &.no-active {
    -webkit-animation: 0.5s linear no-activeBckg forwards;
    animation: 0.5s linear no-activeBckg forwards;

    @keyframes no-activeBckg {
      0% {
        width: 100%;
      }

      10% {
        width: 100%;
      }

      20% {
        width: 100%;
      }

      30% {
        width: 100%;
      }

      40% {
        width: 100%;
      }

      50% {
        width: 100%;
      }

      60% {
        width: 100%;
      }

      70% {
        width: 100%;
      }

      80% {
        width: 100%;
      }

      90% {
        width: 100%;
      }

      99% {
        width: 100%;
      }

      100% {
        width: 0;
      }
    }
  }
}
</style>