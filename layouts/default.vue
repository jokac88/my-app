<template>
  <b-container class="p-0">
    <Loading v-if="loading" />
    <section id="home" v-else>
      <NavBar />
      <SideNav />
      <Nuxt />
    </section>
  </b-container>
</template>

<script>
import Loading from "@/components/Loading.vue";
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";
import { mapState } from "vuex";

export default {
  head() {
    return {
      bodyAttrs: {
        class: this.darkMode ? "dark-mode" : "",
      },
    };
  },
  components: {
    Loading,
    NavBar,
    SideNav,
  },
  computed: mapState({
    loading: (state) => state.store.loading,
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

