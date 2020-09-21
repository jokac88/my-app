<template>
  <section class="back-to-top" :class="{ active : active, isToggle : isToggle }">
    <b-button
      @click="backToTop"
      class="btn-back-to-top"
      :title="$route.path === '/' ? 'Back to top' : 'Vrati se na vrh'"
    >
      <BackToTop class="back-to-top-icon" />
    </b-button>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BackToTop from "@/assets/svg/back-to-top.svg?inline";

export default {
  props: {
    active: Boolean,
  },
  components: {
    BackToTop,
  },
  methods: {
    backToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: mapState({
    isToggle: (state) => state.store.isToggle,
  }),
};
</script>

<style lang="scss">
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: -50px;
  -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;
  z-index: 4;

  &.active {
    bottom: 15px;
  }

  &.isToggle {
    @include media-breakpoint-down(md) {
      right: -35px;
    }
  }

  .btn-back-to-top {
    position: relative;
    width: 45px;
    height: 45px;
    padding: 0;
    -moz-background: $gradient-right;
    -webkit-background: $gradient-right;
    background: $gradient-right;
    border: none;
    z-index: 1;

    @include media-breakpoint-up(xl) {
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }

    @include media-breakpoint-down(md) {
      width: 35px;
      height: 35px;
    }

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      opacity: 0;
      -moz-background: $gradient-left;
      -webkit-background: $gradient-left;
      background: $gradient-left;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
      z-index: -1;
    }
  }

  &-icon {
    width: 40px;
    height: 40px;

    @include media-breakpoint-down(md) {
      width: 30px;
      height: 30px;
    }

    path {
      fill: var(--color-left);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
    }
  }
}
</style>