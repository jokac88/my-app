<template>
  <section class="picture">
    <div class="picture-wrapper">
      <div class="border-gradient border-gradient-small">
        <img
          :src="require('~/assets/' + picture)"
          :alt="require('~/assets/' + picture)"
          :title="name"
          class="image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    picture: String,
    name: String,
  },
};
</script>

<style lang="scss">
.picture {
  display: flex;
  justify-content: center;
  align-items: center;

  &-wrapper {
    padding: 15px;
  }

  .image {
    width: 150px;
    height: 180px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }
}
</style>