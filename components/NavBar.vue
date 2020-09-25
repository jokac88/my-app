<template>
  <section class="nav-bar" :class="{ isToggle: isToggle }">
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
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;
  z-index: 4;

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
    -webkit-box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.75);
    z-index: 5;
  }

  @include media-breakpoint-only(md) {
    right: 5px;
    width: 35px;
  }

  @include media-breakpoint-only(lg) {
    width: 45px;
  }

  &.isToggle {
    @include media-breakpoint-down(sm) {
      left: 80%;
    }

    @include media-breakpoint-only(sm) {
      left: 60%;
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

        @include media-breakpoint-down(sm) {
          width: 35px;
        }

        @include media-breakpoint-up(xl) {
          &:hover:not(.active) {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>