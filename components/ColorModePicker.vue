<template>
  <section class="color-mode-picker">
    <ul class="color-mode-picker-ul">
      <li
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
        :class="[getClasses(color), color]"
      >
        <component :is="`icon-${color}`" />
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
  top: 0;
  left: 0;
  width: 50px;
  height: 200px;
  z-index: 3;

  @include media-breakpoint-down(sm) {
    top: auto;
    bottom: 0;
    width: 80%;
    height: 50px;
    z-index: 2;
  }

  &-ul {
    @include media-breakpoint-down(sm) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: inherit;
    }

    .system,
    .light,
    .dark,
    .sepia {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 100%;
      background-color: var(--bg-color-mode);
      cursor: pointer;
      transition: $transition;

      @include media-breakpoint-up(md) {
        &:hover {
          width: calc(100% + 15px);
        }
      }

      &.preferred {
        .feather {
          color: var(--color-mode-active);
          transition: $transition-2;
        }
      }

      .feather {
        color: var(--color-mode);
        transition: $transition-2;
      }
    }
  }
}
</style>