<template>
  <section id="home">
    <b-container class="p-0">
      <NavBar />
      <!-- <SideNav :navigation="navigation" /> -->
      <Nuxt />
    </b-container>
  </section>
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
  @include media-breakpoint-down(md) {
    padding-top: 50px;
  }
}
</style>

