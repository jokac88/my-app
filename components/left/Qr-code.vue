<template>
  <section class="qr-code">
    <div class="qr-code-wrapper">
      <div class="border-gradient border-gradient-small">
        <QrCode class="svg" />
      </div>
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

  .svg {
    width: 120px;
    height: 120px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;

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