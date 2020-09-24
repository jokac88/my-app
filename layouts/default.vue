<template>
  <section class="default-layout">
    <div class="background" :class="{ isToggle: isToggle }"></div>
    <Pace />
    <NavBar />
    <SideNav :navigation="navigation" />
    <ContactMe :personalInfo="personalInfo" />
    <ColorModePicker />
    <BackToTop :active="isScroll" />
    <Nuxt />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Pace from "@/components/Pace.vue";
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";
import ContactMe from "@/components/ContactMe.vue";
import ColorModePicker from "@/components/ColorModePicker.vue";
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
    ContactMe,
    ColorModePicker,
    BackToTop,
  },
  computed: {
    ...mapState({
      personalInfo: (state) =>
        state.store.data.personalInfo || state.store.data.ličniPodaci,
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

<style lang="scss">
.default-layout {
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    -moz-background: url("~assets/background.png") var(--bg) center;
    -webkit-background: url("~assets/background.png") var(--bg) center;
    background: url("~assets/background.png") var(--bg) center;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;

    @include media-breakpoint-down(sm) {
      left: -100%;
      z-index: 4;
    }

    &.isToggle {
      @include media-breakpoint-down(sm) {
        transform: translate3d(100%, 0, 0);
      }
    }
  }
}
</style>

