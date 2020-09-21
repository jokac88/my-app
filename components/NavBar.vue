<template>
  <section class="nav-bar" :class="{ isToggle : isToggle }">
    <Hamburger class="d-md-none" />
    <div class="links">
      <nuxt-link
        :to="{ name: 'index', params: { lang: '/en' } }"
        :class="$route.path === '/' ? 'active' : ''"
        name="/"
        exact
      >
        <img
          src="~/assets/flags/gb.png"
          alt="~/assets/flags/gb.png"
          :title="$route.path === '/' ? 'English language' : 'Engleski jezik'"
          class="icon"
        />
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'rs', params: { lang: '/rs' } }"
        :class="$route.path === '/rs' ? 'active' : ''"
        name="/rs"
      >
        <img
          src="~/assets/flags/rs.png"
          alt="~/assets/flags/rs.png"
          :title="$route.path === '/rs' ? 'Srpski jezik' : 'Serbian language'"
          class="icon"
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Hamburger from "@/components/Hamburger.vue";

export default {
  components: {
    Hamburger,
  },
  computed: mapState({
    isToggle: (state) => state.store.isToggle,
  }),
};
</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 15px;
  right: 15px;
  width: 60px;
  z-index: 4;
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;

  @include media-breakpoint-down(sm) {
    top: 5px;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    -moz-background: $gradient-right;
    -webkit-background: $gradient-right;
    background: $gradient-right;
    -webkit-box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1);
    -moz-box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1);
    box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
      0 3px 1px 0 rgba(20, 23, 28, 0.1);
  }

  &.isToggle {
    @include media-breakpoint-down(sm) {
      transform: translate3d(80%, 0, 0);
    }

    @include media-breakpoint-only(sm) {
      transform: translate3d(60%, 0, 0);
    }
  }

  .links {
    @include media-breakpoint-down(sm) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      margin-bottom: 15px;
      -webkit-transition: $transition;
      -moz-transition: $transition;
      -o-transition: $transition;
      -ms-transition: $transition;
      transition: $transition;

      &.active {
        .icon {
          opacity: 1;
          -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      @include media-breakpoint-down(sm) {
        margin-bottom: 0;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }

      .icon {
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        opacity: 0.5;
        -webkit-transition: $transition;
        -moz-transition: $transition;
        -o-transition: $transition;
        -ms-transition: $transition;
        transition: $transition;

        @include media-breakpoint-up(xl) {
          &:hover:not(.active) {
            opacity: 1;
          }
        }

        @include media-breakpoint-down(sm) {
          width: 35px;
        }
      }
    }
  }
}
</style>