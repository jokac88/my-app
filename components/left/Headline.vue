<template>
  <section class="headline">
    <em>{{ headline }}</em>
  </section>
</template>

<script>
export default {
  props: {
    headline: String,
  },
};
</script>

<style lang="scss">
.headline {
  padding: 10px 0 15px;
  text-align: center;
}
</style>