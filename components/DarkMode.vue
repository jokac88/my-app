<template>
  <b-button @click="$store.dispatch('store/toggleDarkMode')" class="button-darkMode">
    <img
      :src="darkMode ? require('~/assets/icon/brightness-off.png') : require('~/assets/icon/brightness.png')"
      :alt="darkMode ? require('~/assets/icon/brightness-off.png') : require('~/assets/icon/brightness.png')"
      :title="$route.path === '/' ? (darkMode ? 'Turn off Dark Mode' : 'Trun on Dark Mode') : (darkMode ? 'Isključiti noćni režim' : 'Uključiti noćni režim')"
      class="icon"
    />
  </b-button>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    darkMode: (state) => state.store.darkMode,
  }),
};
</script>

<style lang="scss">
.button {
  &-darkMode {
    position: fixed;
    right: 30px;
    bottom: 30px;
    background-color: transparent !important;
    padding: 0;
    border: none;
    z-index: 2;

    @include media-breakpoint-down(sm) {
      right: 15px;
      bottom: 15px;
    }

    .icon {
      width: 48px;

      @include media-breakpoint-down(sm) {
        width: 24px;
      }
    }
  }
}
</style>