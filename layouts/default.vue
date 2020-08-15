<template>
  <b-container class="p-0">
    <!-- <Loading v-if="loading" /> -->
    <section>
      <NavBar />
      <Nuxt />
    </section>
  </b-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import Loading from "@/components/Loading.vue";
import { mapState } from "vuex";

export default {
  // components: {
  //   Loading,
  // },
  computed: mapState({
    loading: (state) => state.store.loading,
  }),
};
</script>

<style lang="scss">
.container {
  overflow: hidden;
}
</style>

