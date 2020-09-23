<template>
  <b-button
    class="button-toggle"
    v-b-toggle="property + '-collapse'"
    :title="$route.path === '/' ? 'Hide' : 'Sakrij'"
    @click="toggle"
    :name="property"
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
      if (e.currentTarget.name === "technical-skills") {
        this.$bus.$emit(
          "remove-pb",
          e.currentTarget.classList.contains("not-collapsed")
        );
      }
      setTimeout(() => {
        const documentHeight = document.body.clientHeight;
        const windowHeight = window.outerHeight;
        const height = (documentHeight - windowHeight) / 100;
        const scrollY = +window.scrollY.toFixed(2);
        const paceWidth = +(scrollY / height).toFixed(2);
        this.$store.commit("store/SET_PACE_WIDTH", paceWidth);
      }, 500);
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
      -moz-background: $gradient-right;
      -webkit-background: $gradient-right;
      background: $gradient-right;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
      visibility: hidden;
      opacity: 0;
    }

    &:after {
      content: "";
      position: absolute;
      width: 32px;
      height: 19px;
      border-radius: 33px;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
    }

    &[aria-expanded="false"] {
      .slider {
        &:before {
          visibility: visible;
          opacity: 1;
        }
      }

      &:after {
        background-color: var(--bg-button);
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
          background-color: var(--bg-button-2);
        }
      }
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: 19px;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;

      &:before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        height: 13px;
        width: 13px;
        -moz-background: $gradient-right;
        -webkit-background: $gradient-right;
        background: $gradient-right;
        border-radius: 33px;
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
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
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
        z-index: 1;
      }
    }
  }
}
</style>