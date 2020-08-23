<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'index', params: { lang: '/en' } }" exact @click.native="loading">
      <img
        src="~/assets/flags/gb.png"
        alt="~/assets/flags/gb.png"
        :title="$route.path === '/' ? 'English language' : 'Engleski jezik'"
      />
    </router-link>
    <router-link :to="{ name: 'rs', params: { lang: '/rs' } }" @click.native="loading">
      <img
        src="~/assets/flags/rs.png"
        alt="~/assets/flags/rs.png"
        :title="$route.path === '/rs' ? 'Srpski jezik' : 'Serbian language'"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    loading() {
      this.$store.commit("store/SET_LOADING", true);
    },
  },
};
</script>

<style lang="scss">
.nav {
  &-bar {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 60px;

    img {
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      margin-bottom: 15px;
      opacity: 0.5;
      transition: $transition;

      &:hover:not(.nuxt-link-active) {
        opacity: 1;
      }
    }
  }
}

.nuxt {
  &-link {
    &-active {
      display: block;
      font-weight: 700;

      img {
        opacity: 1;
        -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
      }
    }
  }
}
</style>