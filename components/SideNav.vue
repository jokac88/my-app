<template>
  <section
    class="side-nav"
    v-touch:swipe.left="toggle"
    :class="{ isToggle: isToggle }"
  >
    <div class="side-nav-wrapper">
      <div class="nav d-md-none">
        <b-nav v-b-scrollspy:page-col>
          <b-nav-item
            v-for="nav in navigation"
            :key="nav.name || nav.ime"
            :href="'#' + [nav.url || nav.link]"
            v-scroll-to="'#' + [nav.url || nav.link]"
            @click="toggle"
            >{{ nav.name || nav.ime }}</b-nav-item
          >
        </b-nav>
      </div>
    </div>
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
    z-index: 4;

    &.isToggle {
      @include media-breakpoint-down(sm) {
        transform: translate3d(100%, 0, 0);
      }
    }

    .nav {
      display: block;

      &-item {
        line-height: 24px;
      }

      &-link {
        display: block;
        padding: 10px 30px;
        font-size: 24px;
        color: var(--color-right) !important;
        font-weight: 700;
        text-align: center;
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;

        &.active {
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