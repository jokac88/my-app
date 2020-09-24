<template>
  <section
    class="side-nav d-md-none"
    v-touch:swipe.left="toggle"
    :class="{ isToggle: isToggle }"
  >
    <scrollactive
      :offset="69"
      :duration="3000"
      bezier-easing-value=".5, 0, .35, 1"
    >
      <a
        v-for="nav in navigation"
        @click="toggle"
        :href="'#' + [nav.url || nav.link]"
        class="scrollactive-item"
        :key="nav.name || nav.ime"
        >{{ nav.name || nav.ime }}</a
      >
    </scrollactive>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    navigation: Array,
  },
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
.side {
  &-nav {
    position: fixed;
    top: 65px;
    bottom: 105px;
    left: -100%;
    width: 100%;
    overflow-y: scroll;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;
    z-index: 5;

    &.isToggle {
      @include media-breakpoint-down(sm) {
        transform: translate3d(100%, 0, 0);
      }
    }

    .scrollactive {
      &-item {
        display: block;
        padding: 10px 30px;
        line-height: 24px;
        font-size: 24px;
        color: var(--color-right) !important;
        font-weight: 700;
        text-align: center;
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;

        &.is-active {
          -moz-background: $gradient-right;
          -webkit-background: $gradient-right;
          background: $gradient-right;
          color: var(--color-left) !important;
        }
      }
    }
  }
}
</style>