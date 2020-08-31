<template>
  <section id="home" class="home">
    <SideNav :navigation="navigation" />
    <transition name="toggle">
      <Nuxt />
    </transition>
  </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";

export default {
  head() {
    return {
      bodyAttrs: {
        class: [this.loading ? "loading" : ""],
      },
    };
  },
  components: {
    NavBar,
  },
  computed: mapState({
    navigation: (state) =>
      state.store.data.navigation || state.store.data.navigacija,
    isToggle: (state) => state.store.isToggle,
  }),
};
</script>

<style lang="scss">
.home {
  @include media-breakpoint-down(md) {
    padding-top: 50px;
  }
}

.toggle-enter-active,
.toggle-leave-active {
  transform: translate3d(0, 0, 0);
}
.toggle-enter,
.toggle-leave-active {
  transform: translate3d(80%, 0, 0);
}
</style>

