<template>
  <section class="headline">
    <div class="headline-wrapper">
      <h5>
        <em>{{ headline }}</em>
      </h5>
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
  display: flex;
  justify-content: center;
  align-items: center;

  &-wrapper {
    padding: 15px 30px;
  }
}
</style>