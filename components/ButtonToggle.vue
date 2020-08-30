<template>
  <b-button
    class="button-toggle"
    v-b-toggle="property"
    :title="$route.path === '/' ? 'Hide' : 'Sakrij'"
    @click="toggle"
  >
    <span class="slider"></span>
  </b-button>
</template>

<script>
export default {
  props: {
    property: String,
  },
  methods: {
    toggle(e) {
      if (this.$route.path === "/") {
        if (e.currentTarget.title === "Hide") {
          e.currentTarget.title = "Open";
        } else {
          e.currentTarget.title = "Hide";
        }
      } else {
        if (e.currentTarget.title === "Sakrij") {
          e.currentTarget.title = "Otvori";
        } else {
          e.currentTarget.title = "Sakrij";
        }
      }
    },
  },
};
</script>

<style lang="scss">
.button {
  &-toggle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
      width: 32px;
      height: 19px;
      border-radius: 33px;
      background-image: $gradient-right;
      -moz-background-image: $gradient-right;
      -webkit-background-image: $gradient-right;
      transition: $transition-2;
      -webkit-transition: $transition-2;
      visibility: hidden;
      opacity: 0;
    }

    &:after {
      content: "";
      position: absolute;
      width: 32px;
      height: 19px;
      border-radius: 33px;
      transition: $transition-2;
      -webkit-transition: $transition-2;
    }

    &[aria-expanded="false"] {
      .slider {
        &:before {
          visibility: visible;
          opacity: 1;
        }
      }

      &:after {
        background-color: $concrete;
      }
    }

    &[aria-expanded="true"] {
      &:before {
        visibility: visible;
        opacity: 1;
      }

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
      border-radius: 50%;
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
        visibility: hidden;
        opacity: 0;
        z-index: 1;
      }

      &:after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        transition: $transition-2;
        -webkit-transition: $transition-2;
        z-index: 1;
      }
    }
  }
}
</style>