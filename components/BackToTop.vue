<template>
  <section class="back-to-top">
    <b-button class="btn-back-to-top" @click="backToTop">Back to top</b-button>
  </section>
</template>

<script>
export default {
  methods: {
    backToTop() {},
  },
};
</script>

<style lang="scss">
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: -1;

  .btn-back-to-top {
    border: none;
    background-color: transparent !important;
  }
}
</style>