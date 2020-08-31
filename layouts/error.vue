<template>
  <section class="error">
    <b-container>
      <h1 class="status-code">{{ error.statusCode }}</h1>
      <div class="no-connection" v-if="error.statusCode === 500">
        <img src="~assets/svg/no-connection.svg" alt="~assets/svg/no-connection.svg" class="icon" />
      </div>
      <div class="error-404" v-else>
        <img src="~assets/svg/not-found.svg" alt="~assets/svg/not-found.svg" class="icon" />
      </div>
      <h3 class="message">{{ message }}</h3>
      <div class="back-button">
        <b-link @click="goBack">
          <img
            src="~assets/svg/back.svg"
            alt="~assets/svg/back.svg"
            :title="$route.path === '/' ? 'Go back' : 'Idi nazad'"
            class="icon"
          />
        </b-link>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  layout: "error-layout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
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
    font-size: 80px;
    text-align: center;
    font-weight: 700;
  }

  .message {
    text-align: center;
  }

  .no-connection,
  &-404 {
    text-align: center;
    padding: 15px 0;

    .icon {
      width: 128px;
    }
  }
  .back-button {
    text-align: center;
    padding-top: 30px;

    .icon {
      width: 48px;
    }
  }
}
</style>