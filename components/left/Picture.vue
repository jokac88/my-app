<template>
  <section class="picture">
    <div class="wrapper">
      <img
        :src="require('~/assets/' + picture)"
        :alt="require('~/assets/' + picture)"
        :title="name"
        class="image"
      />
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
  text-align: center;

  .wrapper {
    padding: 15px;
  }

  .image {
    width: 150px;
    height: 180px;
    border: 3px double $orient;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }
}
</style>