<template>
  <section class="side-nav d-md-none" :class="{ isToggle : isToggle }">
    <div class="side-nav-wrapper">
      <b-nav v-b-scrollspy:page-col>
        <b-nav-item
          v-for="nav in navigation"
          :key="nav.name || nav.ime"
          :href="'#' + [nav.url || nav.link]"
          v-scroll-to="'#' + [nav.url || nav.link]"
          @click="toggle"
        >{{ nav.name || nav.ime }}</b-nav-item>
      </b-nav>
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
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    overflow-y: auto;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;

    @include media-breakpoint-only(sm) {
      width: 60%;
    }

    &-wrapper {
      padding: 50px 0;

      .nav {
        display: block;

        &-item {
          line-height: 24px;
          text-align: center;
        }

        &-link {
          display: block;
          padding: 10px 30px;
          font-size: 24px;
          color: var(--color-right) !important;
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
}
</style>