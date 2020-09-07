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
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.portfolio {
  text-align: center;
  margin-bottom: 20px;

  .btn-portfolio {
    background-image: $gradient-right;
    color: var(--bg) !important;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    -webkit-transition: $transition-2;
    transition: $transition-2;
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
      background-image: $gradient-left;
      -webkit-transition: $transition-2;
      transition: $transition-2;
      border-radius: 5px;
      opacity: 0;
      z-index: -1;
    }
  }
}
</style>