<template>
  <section class="portfolio">
    <div class="portfolio-wrapper">
      <a
        href="https://jokac88.github.io/portfolio"
        class="btn btn-portfolio"
        target="_blank"
        >Portfolio</a
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.portfolio {
  text-align: center;

  &-wrapper {
    padding: 15px 30px;

    .btn-portfolio {
      position: relative;
      color: var(--color-left) !important;
      -moz-background: $gradient-right;
      -webkit-background: $gradient-right;
      background: $gradient-right;
      font-weight: bold;
      letter-spacing: 1px;
      border: none;
      padding: 10px 20px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      z-index: 1;

      @include media-breakpoint-up(xl) {
        &:hover {
          &::after {
            opacity: 1;
          }
        }
      }

      &::after {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        opacity: 0;
        -moz-background: $gradient-left;
        -webkit-background: $gradient-left;
        background: $gradient-left;
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
        z-index: -1;
      }
    }
  }
}
</style>