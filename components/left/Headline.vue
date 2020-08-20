<template>
  <section class="headline">
    <em>{{ data.headline }}</em>
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
.headline {
  padding: 10px 0 15px;
  text-align: center;
}
</style>