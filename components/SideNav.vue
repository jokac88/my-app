<template>
  <section class="side-nav d-md-none">
    <b-nav v-b-scrollspy:page>
      <!-- <b-nav-item href="#about-me">About Me</b-nav-item>
      <b-nav-item href="#driving-license">Home</b-nav-item>-->
      <b-nav-item
        v-for="nav in navigation"
        :key="nav.name || nav.ime"
        :href="'#' + nav.url || nav.link"
      >{{ nav.name || nav.ime }}</b-nav-item>
    </b-nav>
  </section>
</template>

<script>
export default {
  props: {
    navigation: Array,
  },
};
</script>

<style lang="scss">
.side {
  &-nav {
    position: fixed;
    top: 50px;
    bottom: 50px;
    left: 0;
    width: 80%;
    overflow-y: auto;
    z-index: 1;

    .nav {
      display: block;

      &-item {
        // background-image: $gradient-left;
        padding: 0 30px 15px;
        line-height: 24px;

        &:last-child {
          padding-bottom: 0;
        }
      }

      &-link {
        color: var(--bg-color-mode) !important;
        font-size: 24px;
        padding: 0;
        transition: $transition-2;

        &.active {
          font-weight: 700;
        }
      }
    }
  }
}
</style>