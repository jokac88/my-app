<template>
  <div class="header-shape">
    <div class="shape">
      <div class="wrapper">
        <img
          :src="require('~/assets/icon/' + property + '.png')"
          class="icon"
          :alt="require('~/assets/icon/' + property + '.png')"
          :title="heading"
        />
        <h4>{{ heading }}</h4>
      </div>
    </div>
    <ButtonToggle :property="property" />
  </div>
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
  &-shape {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 5px solid transparent;
    -moz-border-image: $gradient-right;
    -webkit-border-image: $gradient-right;
    border-image: $gradient-right;
    border-image-slice: 1;

    .shape {
      margin-left: 15px;
      transform: skew(-30deg);
      -webkit-transform: skew(-30deg);
      -moz-transform: skew(-30deg);
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      background-image: $gradient-right;
      -moz-background-image: $gradient-right;
      -webkit-background-image: $gradient-right;

      .wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 15px;
        -webkit-transform: skew(30deg);
        -moz-transform: skew(30deg);
        transform: skew(30deg);
        color: $white;

        .icon {
          width: 40px;
          margin-right: 10px;
          border-radius: 50%;
          -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        }
      }
    }
  }
}
</style>