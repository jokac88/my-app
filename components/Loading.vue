<template>
  <div class="loader">
    <img src="~/assets/loader.gif" alt="~/assets/loader.gif" title="Loader" class="loader-gif" />
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
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  &-gif {
    width: 200px;

    @include media-breakpoint-down(sm) {
      width: 100px;
    }
  }
}
</style>