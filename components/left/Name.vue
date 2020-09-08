<template>
  <section class="name" :class="{ dark : isDarkMode }">
    <div class="name-wrapper">
      <h1>{{ name }}</h1>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    name: String,
  },
  computed: mapState({
    isDarkMode: (state) => state.store.isDarkMode,
  }),
};
</script>

<style lang="scss">
.name {
  position: relative;
  -moz-background: $gradient-right;
  -webkit-background: $gradient-right;
  background: $gradient-right;
  z-index: 1;

  &.dark {
    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -moz-background: $gradient-right-dark;
    -webkit-background: $gradient-right-dark;
    background: $gradient-right-dark;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;
    z-index: -1;
  }

  &-wrapper {
    padding: 10px 15px;
  }

  h1 {
    text-align: center;
    letter-spacing: 3px;
  }
}
</style>