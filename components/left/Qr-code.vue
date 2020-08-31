<template>
  <section class="qr-code">
    <QrCode class="svg" />
  </section>
</template>

<script>
import QrCode from "@/assets/svg/qr-code.svg?inline";

export default {
  components: {
    QrCode,
  },
};
</script>

<style lang="scss">
.qr-code {
  text-align: center;
  margin-bottom: 20px;

  svg {
    width: 100px;
    height: 100px;
  }
}
</style>