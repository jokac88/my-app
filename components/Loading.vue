<template>
  <section class="loading" v-if="isLoading">
    <Loader class="loader" />
  </section>
</template>

<script>
import Loader from "@/assets/svg/loader.svg?inline";
import { mapState } from "vuex";

export default {
  components: {
    Loader,
  },
  mounted() {
    this.$store.dispatch("store/loading", { loading: false, duration: 2500 });
  },
  computed: mapState({
    isLoading: (state) => state.store.isLoading,
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
  z-index: 4;

  .loader {
    width: 250px;

    @include media-breakpoint-down(sm) {
      width: 200px;
    }
  }
}
</style>