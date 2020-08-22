<template>
  <b-button class="btn-toggle" v-b-toggle="property" title="Hide">
    <span class="slider"></span>
  </b-button>
</template>

<script>
export default {
  props: {
    property: String,
  },
};
</script>

<style lang="scss">
.btn {
  &-toggle {
    position: relative;
    width: 32px;
    height: 19px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 33px;
    background-color: transparent !important;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: 19px;
      border-radius: 33px;
      background-image: $gradient-right;
      -moz-background-image: $gradient-right;
      -webkit-background-image: $gradient-right;
      transition: $transition-2;
      -webkit-transition: $transition-2;
    }

    &:after {
      content: "";
      position: absolute;
      top: -0.2px;
      left: -0.2px;
      width: 32.4px;
      height: 19.4px;
      border-radius: 33px;
      transition: $transition-2;
      -webkit-transition: $transition-2;
    }

    &[aria-expanded="false"] {
      &:after {
        background-color: $concrete;
      }
    }

    &[aria-expanded="true"] {
      .slider {
        &:before,
        &:after {
          -webkit-transform: translateX(13px);
          -ms-transform: translateX(13px);
          transform: translateX(13px);
        }

        &:after {
          background-color: $white;
        }
      }
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: 19px;
      border-radius: 33px;
      transition: $transition-2;
      -webkit-transition: $transition-2;

      &:before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        height: 13px;
        width: 13px;
        background-image: $gradient-right;
        -moz-background-image: $gradient-right;
        -webkit-background-image: $gradient-right;
        border-radius: 33px;
        transition: $transition-2;
        -webkit-transition: $transition-2;
        z-index: 1;
      }

      &:after {
        content: "";
        position: absolute;
        left: 2.8px;
        top: 2.8px;
        height: 13.4px;
        width: 13.4px;
        border-radius: 33px;
        transition: $transition-2;
        -webkit-transition: $transition-2;
        z-index: 1;
      }
    }
  }
}
</style>