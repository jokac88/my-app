<template>
  <section class="loading" v-if="isLoading">
    <Loader class="loader" />
    <Icon class="icon" />
  </section>
</template>

<script>
import Loader from "@/assets/svg/loader.svg?inline";
import Icon from "@/assets/svg/icon.svg?inline";
import { mapState } from "vuex";

export default {
  components: {
    Loader,
    Icon,
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("~assets/background.png") var(--bg) center repeat;
  z-index: 5;

  .loader {
    position: absolute;
    width: 300px;
    height: 300px;

    @include media-breakpoint-down(sm) {
      width: 200px;
      height: 200px;
    }
  }

  .icon {
    position: absolute;
    width: 189px;
    height: 189px;
    fill: yellow;

    @include media-breakpoint-down(sm) {
      width: 126px;
      height: 126px;
    }
  }
}
</style>