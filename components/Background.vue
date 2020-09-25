<template>
  <section class="background" :class="{ isToggle: isToggle }"></section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      isToggle: (state) => state.store.isToggle,
    }),
  },
};
</script>

<style lang="scss">
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
}
</style>