<template>
  <section class="picture">
    <div class="picture-wrapper">
      <div class="image-div">
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
    border: 3px double;
    padding: 3px;
    -moz-border-image: $gradient-right;
    -webkit-border-image: $gradient-right;
    border-image: $gradient-right;
    -webkit-border-image-slice: 1;
    border-image-slice: 1;
  }
}
</style>