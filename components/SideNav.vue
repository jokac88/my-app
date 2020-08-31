<template>
  <section class="side-nav d-md-none">
    <ColorModePicker />
    <div class="side-nav-wrapper">
      <ul class="side-nav-ul" v-b-scrollspy:home>
        <li v-for="nav in navigation" :key="nav.name || nav.ime">
          <b-link :href="'#' + nav.url || nav.link">{{ nav.name || nav.ime }}</b-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ColorModePicker from "@/components/ColorModePicker.vue";

export default {
  props: {
    navigation: Array,
  },
  components: {
    ColorModePicker,
  },
};
</script>

<style lang="scss">
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  z-index: 3;
  // background-color: $concrete;
  overflow-y: auto;

  &-wrapper {
    padding: 50px 0;
  }

  &-ul {
    li {
      // background-image: $gradient-left;
      padding: 0 30px 5px;

      &:last-child {
        padding-bottom: 0;
      }

      a {
        color: $black;
        font-size: 24px;
      }
    }
  }
}
</style>