<template>
  <section class="nav-bar">
    <Hamburger class="d-lg-none" />
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
import Hamburger from "@/components/Hamburger.vue";

export default {
  components: {
    Hamburger,
  },
};
</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 15px;
  right: 15px;
  width: 60px;
  z-index: 1;

  @include media-breakpoint-down(md) {
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-image: $gradient-right;
    box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
      0 3px 1px 0 rgba(20, 23, 28, 0.1);
    // z-index: 4;
    transform: translate3d(80%, 0, 0);
  }

  .links {
    @include media-breakpoint-down(md) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      margin-bottom: 15px;
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

      @include media-breakpoint-down(md) {
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
        transition: $transition;

        @include media-breakpoint-up(lg) {
          &:hover:not(.active) {
            opacity: 1;
          }
        }

        @include media-breakpoint-down(md) {
          width: 35px;
        }
      }
    }
  }
}
</style>