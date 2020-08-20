<template>
  <section class="picture text-center">
    <div class="wrapper">
      <div id="lightgallery" lg-uid="lg0">
        <a class="item-img" href="~/assets/picture.png" lg-event-uid="&amp;1&amp;2">
          <img src="~/assets/picture.png" alt="~/assets/picture.png" :title="data.name" />
        </a>
      </div>
    </div>
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
.picture {
  .wrapper {
    padding: 15px;
  }

  img {
    width: 150px;
    height: 180px;
    border: 3px double $orient;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }
}
</style>