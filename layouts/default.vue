<template>
  <section class="default-layout">
    <Pace />
    <NavBar />
    <SideNav :navigation="navigation" />
    <!-- <ColorModePicker /> -->
    <CloseSideNav />
    <BackToTop :active="isScroll" />
    <transition name="toggle">
      <Nuxt />
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Pace from "@/components/Pace.vue";
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
        class: [
          this.isLoading ? "isLoading" : "",
          this.isToggle ? "isToggle" : "",
        ],
      },
    };
  },
  components: {
    Pace,
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
      if (window.scrollY <= 600) {
        this.isScroll = false;
      } else {
        this.isScroll = true;
      }
    },
    onResize() {
      const body = document.querySelector("body");
      if (window.innerWidth >= 768 && this.isToggle) {
        return body.classList.remove("isToggle");
      } else if (window.innerWidth < 768 && this.isToggle) {
        return body.classList.add("isToggle");
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scroll);
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss"></style>

