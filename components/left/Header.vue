<template>
  <div class="header" :class="{ dark : isDarkMode }">
    <div class="header-wrapper">
      <div class="heading">
        <img
          :src="require('~/assets/icon/' + property + '.png')"
          class="icon"
          :alt="require('~/assets/icon/' + property + '.png')"
          :title="heading"
        />
        <h4>{{ heading }}</h4>
      </div>
      <ButtonToggle :property="property" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ButtonToggle from "@/components/ButtonToggle.vue";

export default {
  components: {
    ButtonToggle,
  },
  props: {
    heading: String,
    property: String,
  },
  computed: mapState({
    isDarkMode: (state) => state.store.isDarkMode,
  }),
};
</script>

<style lang="scss">
.header {
  position: relative;
  margin-bottom: 20px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }

  .heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon {
      width: 35px;
      margin-right: 10px;
      border-radius: 50%;
      -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
    }
  }
}
</style>