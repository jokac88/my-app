<template>
  <section class="portfolio">
    <a
      href="https://jokac88.github.io/portfolio"
      class="btn btn-portfolio"
      target="_blank"
    >Portfolio</a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.portfolio {
  text-align: center;
  margin-bottom: 15px;

  .btn-portfolio {
    position: relative;
    color: var(--color-left) !important;
    -moz-background: var(--bg-gradient);
    -webkit-background: var(--bg-gradient);
    background: var(--bg-gradient);
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    padding: 10px 20px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    z-index: 1;

    &:hover {
      &:after {
        opacity: 1;
      }
    }

    &:after {
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
      -moz-background: var(--bg-gradient-after);
      -webkit-background: var(--bg-gradient-after);
      background: var(--bg-gradient-after);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
      z-index: -1;
    }
  }
}
</style>