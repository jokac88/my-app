<template>
  <b-container class="p-0">
    <!-- <Loading v-if="loading" /> -->
    <section>
      <NavBar />
      <DarkMode />
      <Nuxt />
    </section>
  </b-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Loading from "@/components/Loading.vue";
import DarkMode from "@/components/DarkMode.vue";
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
</style>

