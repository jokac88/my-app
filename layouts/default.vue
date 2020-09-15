<template>
  <section class="default-layout">
    <NavBar />
    <SideNav :navigation="navigation" />
    <ColorModePicker />
    <CloseSideNav />
    <BackToTop :active="isScroll" />
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
import CloseSideNav from "@/components/CloseSideNav.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  data: () => ({
    isScroll: false,
  }),
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
    CloseSideNav,
    BackToTop,
  },
  computed: {
    ...mapState({
      navigation: (state) =>
        state.store.data.navigation || state.store.data.navigacija,
      isLoading: (state) => state.store.isLoading,
      isToggle: (state) => state.store.isToggle,
    }),
  },
  methods: {
    scroll() {
      if (window.scrollY <= 300) {
        this.isScroll = false;
      } else {
        this.isScroll = true;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scroll);
  },
};
</script>

<style lang="scss"></style>

