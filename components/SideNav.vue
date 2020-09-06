<template>
  <section class="side-nav">
    <div class="side-nav-wrapper">
      <b-nav v-b-scrollspy:page>
        <!-- <b-nav-item href="#about-me">About Me</b-nav-item>
        <b-nav-item href="#driving-license">Home</b-nav-item>-->
        <b-nav-item
          v-for="nav in navigation"
          :key="nav.name || nav.ime"
          :href="'#' + nav.url || nav.link"
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
};
</script>

<style lang="scss">
.side {
  &-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    z-index: -1;
    background-color: $concrete;
    overflow-y: auto;
    display: none;

    &-wrapper {
      padding: 50px 0;

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

          &.active {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>