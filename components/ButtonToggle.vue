<template>
  <b-button class="btn-switch" v-b-toggle="property" title="Hide">
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
  &-switch {
    position: relative;
    width: 32px;
    height: 19px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 33px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 33px;
      transition: $transition-2;
      -webkit-transition: $transition-2;
    }

    &[aria-expanded="true"] {
      &:after {
        background-color: $white;
      }
    }

    &[aria-expanded="false"] {
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
      width: 100%;
      height: 100%;
      border-radius: 33px;
      transition: $transition-2;
      -webkit-transition: $transition-2;

      &:before {
        content: "";
        position: absolute;
        height: 13px;
        width: 13px;
        left: 3px;
        bottom: 3px;
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
        height: 13px;
        width: 13px;
        left: 3px;
        bottom: 3px;
        border-radius: 33px;
        transition: $transition-2;
        -webkit-transition: $transition-2;
        z-index: 1;
      }
    }
  }
}
</style>