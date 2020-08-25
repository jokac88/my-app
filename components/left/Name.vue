<template>
  <section class="name">
    <h1 class="text-center">{{ name }}</h1>
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
  letter-spacing: 3px;
  font-weight: bold;
  padding: 10px 15px;
}
</style>