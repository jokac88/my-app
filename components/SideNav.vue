<template>
  <section class="side-nav d-md-none">
    <div class="wrapper">
      <ul v-b-scrollspy:home>
        <li v-for="nav in navigation" :key="nav.name || nav.ime">
          <b-link :href="'#' + nav.url || nav.link">{{ nav.name || nav.ime }}</b-link>
        </li>
      </ul>
    </div>
    <DarkMode />
  </section>
</template>

<script>
import { mapState } from "vuex";
import DarkMode from "@/components/DarkMode.vue";

export default {
  props: {
    navigation: Array,
  },
  components: {
    DarkMode,
  },
};
</script>

<style lang="scss">
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  z-index: 3;
  // background-color: $black;

  .wrapper {
    padding: 50px 0;
  }

  ul {
    li {
      // background-image: $gradient-left;
      padding: 0 15px;

      a {
        color: $black !important;
      }
    }
  }
}
</style>