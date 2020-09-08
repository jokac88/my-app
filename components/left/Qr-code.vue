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

  .svg {
    width: 100px;
    height: 100px;

    .rect {
      fill: var(--bg-qr);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
    }
  }
}
</style>