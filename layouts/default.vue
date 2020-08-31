<template>
  <b-container class="p-0">
    <section id="home">
      <NavBar />
      <!-- <SideNav :navigation="navigation" /> -->
      <Nuxt />
    </section>
  </b-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";
import { mapState } from "vuex";

export default {
  head() {
    return {
      bodyAttrs: {
        class: [
          this.loading ? "loading" : "",
          this.darkMode ? "dark-mode" : "",
        ],
      },
    };
  },
  components: {
    NavBar,
    SideNav,
  },
  computed: mapState({
    loading: (state) => state.store.loading,
    navigation: (state) =>
      state.store.data.navigation || state.store.data.navigacija,
    darkMode: (state) => state.store.darkMode,
  }),
};
</script>

<style lang="scss">
.container {
  overflow: hidden;
}

#home {
  @include media-breakpoint-down(sm) {
    padding-top: 50px;
  }
}
</style>

