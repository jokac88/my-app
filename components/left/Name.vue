<template>
  <section class="name">
    <div class="wrapper">
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
  background-image: $gradient-right;
  -moz-background-image: $gradient-right;
  -webkit-background-image: $gradient-right;

  .wrapper {
    padding: 10px 15px;
  }

  h1 {
    text-align: center;
    letter-spacing: 3px;
  }
}
</style>