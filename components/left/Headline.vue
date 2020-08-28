<template>
  <section class="headline">
    <div class="wrapper">
      <em>{{ headline }}</em>
    </div>
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
  text-align: center;

  .wrapper {
    padding: 10px 15px;
  }
}
</style>