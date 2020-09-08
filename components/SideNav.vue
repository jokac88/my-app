<template>
  <section class="side-nav d-md-none">
    <div class="side-nav-wrapper">
      <b-nav v-b-scrollspy:page>
        <!-- <b-nav-item href="#about-me">About Me</b-nav-item>
        <b-nav-item href="#driving-license">Home</b-nav-item>-->
        <b-nav-item
          v-for="nav in navigation"
          :key="nav.name || nav.ime"
          :href="'#' + [nav.url || nav.link]"
          @click="toggle"
        >{{ nav.name || nav.ime }}</b-nav-item>
      </b-nav>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    navigation: Array,
  },
  methods: {
    toggle() {
      this.$store.commit("store/SET_TOGGLE");
    },
  },
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
    z-index: 1;
    overflow-y: auto;

    @include media-breakpoint-only(sm) {
      width: 60%;
    }

    &-wrapper {
      padding: 50px 0;

      .nav {
        display: block;
        overflow-y: auto;

        &-item {
          line-height: 24px;
          text-align: center;
        }

        &-link {
          display: block;
          color: var(--bg-color-mode) !important;
          padding: 10px 30px;
          font-size: 24px;
          -webkit-transition: $transition-2;
          -moz-transition: $transition-2;
          -o-transition: $transition-2;
          -ms-transition: $transition-2;
          transition: $transition-2;

          &.active {
            -moz-background-image: $gradient-right;
            -webkit-background-image: $gradient-right;
            background-image: $gradient-right;
            color: var(--bg) !important;
          }
        }
      }
    }
  }
}
</style>