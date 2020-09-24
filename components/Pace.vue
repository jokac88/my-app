<template>
  <section class="pace d-md-none">
    <div
      class="pace-width"
      :style="{ width: paceWidth + '%' }"
      :class="{ 'remove-br': paceWidth === 100 }"
    ></div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      paceWidth: (state) => state.store.paceWidth,
    }),
  },
  methods: {
    pace() {
      const documentHeight = document.body.clientHeight;
      const windowHeight = window.outerHeight;
      const height = (documentHeight - windowHeight) / 100;
      const scrollY = +window.scrollY.toFixed(2);
      const paceWidth = +(scrollY / height).toFixed(2);
      this.$store.commit("store/SET_PACE_WIDTH", paceWidth);
    },
  },
  mounted() {
    document.addEventListener("scroll", this.pace);
  },
};
</script>

<style lang="scss">
.pace {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 5px;
  -moz-background: var(--bg);
  -webkit-background: var(--bg);
  background: var(--bg);
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;
  z-index: 4;

  &-width {
    height: inherit;
    -moz-background: $gradient-right;
    -webkit-background: $gradient-right;
    background: $gradient-right;
    -moz-border-top-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -moz-border-bottom-right-radius: 3px;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;

    &.remove-br {
      -moz-border-top-right-radius: 0;
      -webkit-border-top-right-radius: 0;
      border-top-right-radius: 0;
      -moz-border-bottom-right-radius: 0;
      -webkit-border-bottom-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>