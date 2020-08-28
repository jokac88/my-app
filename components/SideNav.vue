<template>
  <section class="side-nav d-md-none">
    <div class="wrapper">
      <ul v-b-scrollspy:home>
        <li v-for="nav in navigation" :key="nav.name || nav.ime">
          <b-link :href="'#' + nav.url || nav.link">{{ nav.name || nav.ime }}</b-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    navigation: (state) =>
      state.store.data.navigation || state.store.data.navigacija,
  }),
};
</script>

<style lang="scss">
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: $black;

  .wrapper {
    padding: 30px 0;
  }

  ul {
    li {
      background-image: $gradient-left;
      padding: 0 15px;

      a {
        color: $black;
      }
    }
  }
}
</style>