<template>
  <section class="header">
    <div class="heading">
      <img
        :src="require('~/assets/icon/' + property + '.png')"
        class="icon"
        :alt="require('~/assets/icon/' + property + '.png')"
        :title="heading"
      />
      <h4>{{ heading }}</h4>
    </div>
    <ButtonToggle :property="property" />
  </section>
</template>

<script>
import ButtonToggle from "@/components/ButtonToggle.vue";

export default {
  components: {
    ButtonToggle,
  },
  props: {
    heading: String,
    property: String,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-image: $gradient-right;
  -moz-background-image: $gradient-right;
  -webkit-background-image: $gradient-right;

  .heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon {
      border-radius: 50%;
      width: 35px;
      margin-right: 15px;
      -webkit-box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
      box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
    }
  }
}
</style>