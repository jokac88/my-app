<template>
  <div class="nav-bar">
    <Hamburger />
    <div class="links">
      <router-link :to="{ name: 'index', params: { lang: '/en' } }" exact @click.native="loading">
        <img
          src="~/assets/flags/gb.png"
          alt="~/assets/flags/gb.png"
          :title="$route.path === '/' ? 'English language' : 'Engleski jezik'"
          class="icon"
        />
      </router-link>
      <router-link :to="{ name: 'rs', params: { lang: '/rs' } }" @click.native="loading">
        <img
          src="~/assets/flags/rs.png"
          alt="~/assets/flags/rs.png"
          :title="$route.path === '/rs' ? 'Srpski jezik' : 'Serbian language'"
          class="icon"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger.vue";

export default {
  components: {
    Hamburger,
  },
  methods: {
    loading() {
      this.$store.commit("store/SET_LOADING", true);
    },
  },
};
</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 30px;
  right: 30px;
  width: 60px;

  @include media-breakpoint-down(sm) {
    top: 0px;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    z-index: 2;
    background-image: $gradient-right;
    box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
      0 3px 1px 0 rgba(20, 23, 28, 0.1);
  }

  .links {
    @include media-breakpoint-down(sm) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      margin-bottom: 15px;

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
    }

    .icon {
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      opacity: 0.5;
      transition: $transition;

      &:hover:not(.nuxt-link-active) {
        opacity: 1;
      }

      @include media-breakpoint-down(sm) {
        width: 35px;
      }
    }
  }

  .nuxt {
    &-link {
      &-active {
        display: block;
        font-weight: 700;

        .icon {
          opacity: 1;
          -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        }
      }
    }
  }
}
</style>