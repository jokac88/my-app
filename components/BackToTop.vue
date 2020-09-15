<template>
  <section class="back-to-top" :class="{ active : true }">
    <b-button
      @click="backToTop"
      class="btn-back-to-top border-gradient border-gradient-small"
      :title="$route.path === '/' ? 'Back to top' : 'Vrati se na vrh'"
    >
      <BackToTop class="back-to-top-icon" />
    </b-button>
  </section>
</template>

<script>
import BackToTop from "@/assets/svg/back-to-top.svg?inline";

export default {
  components: {
    BackToTop,
  },
  methods: {
    backToTop() {
      const scroll = window.scrollY;
      if (scroll >= 300) {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
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

  .btn-back-to-top {
    position: relative;
    width: 50px;
    height: 50px;
    padding: 0;
    background-color: transparent !important;
    border: none;
    z-index: 1;

    @include media-breakpoint-up(xl) {
      &:hover {
        &:after {
          opacity: 1;
        }
      }
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
      -moz-background: var(--bg-gradient-after);
      -webkit-background: var(--bg-gradient-after);
      background: var(--bg-gradient-after);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
      z-index: -1;
    }
  }

  &-icon {
    width: 45px;
    height: 45px;

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