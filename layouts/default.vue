<template>
  <section class="default-layout">
    <NavBar />
    <SideNav :navigation="navigation" />
    <ColorModePicker />
    <transition name="toggle">
      <Nuxt />
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";
import ColorModePicker from "@/components/ColorModePicker.vue";

export default {
  head() {
    return {
      bodyAttrs: {
        class: [this.isLoading ? "loading" : "", this.isToggle ? "toggle" : ""],
      },
    };
  },
  components: {
    NavBar,
    SideNav,
    ColorModePicker,
  },
  computed: mapState({
    navigation: (state) =>
      state.store.data.navigation || state.store.data.navigacija,
    isLoading: (state) => state.store.isLoading,
    isToggle: (state) => state.store.isToggle,
  }),
};
</script>

<style lang="scss">
.toggle-enter-active,
.toggle-leave-active {
  transform: translate3d(0, 0, 0);
}
.toggle-enter,
.toggle-leave-active {
  transform: translate3d(80%, 0, 0);
}
</style>

