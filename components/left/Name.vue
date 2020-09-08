<template>
  <section class="name">
    <div class="name-wrapper">
      <h1>{{ name }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss">
.name {
  -moz-background-image: $gradient-right;
  -webkit-background-image: $gradient-right;
  background-image: $gradient-right;

  &-wrapper {
    padding: 10px 15px;
  }

  h1 {
    text-align: center;
    letter-spacing: 3px;
    color: var(--bg);
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;
  }
}
</style>