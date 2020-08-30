<template>
  <section class="loading" v-if="loading">
    <img src="~/assets/loader.svg" alt="~/assets/loader.svg" title="Loader" class="loader" />
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("store/loading", { loading: false, duration: 2500 });
  },
  computed: mapState({
    loading: (state) => state.store.loading,
  }),
};
</script>

<style lang="scss" scoped>
.loading {
  background: url("~assets/background.png") $white repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;

  .loader {
    width: 250px;

    @include media-breakpoint-down(sm) {
      width: 200px;
    }
  }
}
</style>