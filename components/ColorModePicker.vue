<template>
  <section class="color-mode-picker">
    <ul class="color-mode-picker-ul">
      <li v-for="color of colors" :key="color">
        <component :is="`icon-${color}`" @click="$colorMode.preference = color" />
      </li>
    </ul>
  </section>
</template>

<script>
import IconSystem from "@/assets/svg/system.svg?inline";
import IconLight from "@/assets/svg/light.svg?inline";
import IconDark from "@/assets/svg/dark.svg?inline";
import IconSepia from "@/assets/svg/sepia.svg?inline";

export default {
  data: () => ({
    colors: ["system", "light", "dark", "sepia"],
  }),
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia,
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      };
    },
  },
};
</script>

<style lang="scss">
.color-mode-picker {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 80%;
  height: 50px;
  z-index: 4;
  background-color: $white;

  &-ul {
    height: inherit;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>