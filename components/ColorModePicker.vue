<template>
  <section class="color-mode-picker">
    <ul class="color-mode-picker-ul">
      <li
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color, darkMode(color)"
        :class="[getClasses(color), color]"
      >
        <component :is="`icon-${color}`" />
        <template v-if="$route.path === '/'">
          <span class="mode-name">{{ color | capitalize }}</span>
        </template>
        <template v-else>
          <span v-if="color === 'system'" class="mode-name">Sistem</span>
          <span v-if="color === 'light'" class="mode-name">Svetlo</span>
          <span v-if="color === 'dark'" class="mode-name">Tamno</span>
          <span v-if="color === 'sepia'" class="mode-name">Sepija</span>
        </template>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
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
    darkMode(color) {
      if (color === "dark") {
        this.$store.commit("store/SET_DARK_MODE", true);
      } else {
        this.$store.commit("store/SET_DARK_MODE", false);
      }
    },
  },
  computed: mapState({
    isDarkMode: (state) => state.store.isDarkMode,
  }),
};
</script>

<style lang="scss">
.color-mode-picker {
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 240px;
  z-index: 3;
  -moz-background: $gradient-right;
  -webkit-background: $gradient-right;
  background: $gradient-right;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  border-bottom-right-radius: 3px;

  @include media-breakpoint-down(sm) {
    top: auto;
    bottom: 0;
    width: 80%;
    height: 50px;
    z-index: 2;
    -webkit-box-shadow: 0px -2px 10px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -2px 10px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px -2px 10px -5px rgba(0, 0, 0, 0.75);
    border-bottom-right-radius: 0;
  }

  @include media-breakpoint-only(sm) {
    width: 60%;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 100%;
      cursor: pointer;
      z-index: 1;
      border-bottom: 1px solid var(--bg);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;

      &:last-child {
        border-bottom: none;
      }

      @include media-breakpoint-down(sm) {
        height: 50px;
        border-right: 1px solid var(--color-mode);
        border-bottom: none;

        &:last-child {
          border-right: none;
        }
      }

      @include media-breakpoint-up(md) {
        &:not(.preferred):hover {
          .feather {
            left: 10px;
          }
        }
      }

      &.preferred {
        .feather {
          fill: var(--color-mode);
        }
      }

      .feather {
        position: relative;
        left: 0;
        color: var(--color-mode);
        fill: transparent;
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
        margin-bottom: 2px;

        @include media-breakpoint-down(sm) {
          margin-bottom: 0;
        }
      }

      .mode-name {
        color: var(--color-mode);
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
      }
    }
  }
}
</style>