<template>
  <section class="error">
    <b-container>
      <h1 class="status-code">{{ error.statusCode }}</h1>
      <div v-if="error.statusCode === 500" class="no-connection">
        <NoConnection class="icon" />
        <!-- <img src="~assets/svg/no-connection.svg" alt="~assets/svg/no-connection.svg" class="icon" /> -->
      </div>
      <div v-else class="error-404">
        <NotFound class="icon" />
        <!-- <img src="~assets/svg/not-found.svg" alt="~assets/svg/not-found.svg" class="icon" /> -->
      </div>
      <h3 class="message">{{ message }}</h3>
      <div class="back-button">
        <b-link
          @click="goBack"
          :title="$route.path === '/' ? 'Go back' : 'Idi nazad'"
        >
          <Back class="icon" />
        </b-link>
      </div>
    </b-container>
  </section>
</template>

<script>
import NoConnection from "~/assets/svg/error/no-connection.svg?inline";
import NotFound from "~/assets/svg/error/not-found.svg?inline";
import Back from "~/assets/svg/error/back.svg?inline";

export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  components: {
    NoConnection,
    NotFound,
    Back,
  },
  layout: "error-layout",
  mounted() {
    if (this.error.statusCode === 404) {
      const path = this.$route.path;
      const match = path.match(/\/([^\/]+)\/?$/)[1];
      if (this.$route.path === "/rs/" + match) {
        this.error.message = "Stranica ne postoji";
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    message() {
      return this.error.message;
    },
  },
};
</script>

<style lang="scss">
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .status-code {
    font-size: 100px;
    text-align: center;
    color: var(--color-error);
    font-weight: 700;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;
  }

  .message {
    text-align: center;
    color: var(--color-error);
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;
  }

  .no-connection,
  &-404 {
    text-align: center;
    padding: 15px 0;

    .icon {
      width: 128px;
      height: 128px;

      path {
        fill: var(--color-error);
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
      }
    }
  }

  .back-button {
    text-align: center;
    padding-top: 30px;

    .icon {
      width: 64px;
      height: 64px;

      path {
        fill: var(--color-error);
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
      }
    }
  }
}
</style>