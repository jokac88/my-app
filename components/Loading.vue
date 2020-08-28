<template>
  <div class="loading">
    <img src="~/assets/loader.gif" alt="~/assets/loader.gif" title="Loader" class="loader" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("store/loading", false);
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  .loader {
    width: 200px;

    @include media-breakpoint-down(sm) {
      width: 100px;
    }
  }
}
</style>