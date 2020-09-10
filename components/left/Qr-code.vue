<template>
  <section class="qr-code">
    <div class="qr-code-wrapper">
      <QrCode class="svg" />
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  &-wrapper {
    padding: 3px;
    border: 3px double;
    -moz-border-image: $gradient-right;
    -webkit-border-image: $gradient-right;
    border-image: $gradient-right;
    -webkit-border-image-slice: 1;
    border-image-slice: 1;
  }

  .svg {
    width: 120px;
    height: 120px;

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