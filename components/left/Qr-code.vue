<template>
  <section class="qr-code">
    <img src="~/assets/qr-code.svg" alt="~/assets/qr-code.svg" title="QR Code" />
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.qr-code {
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100px;
  }
}
</style>