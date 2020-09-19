<template>
  <div class="header-left">
    <div class="header-left-wrapper">
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  &-left {
    position: relative;
    margin-bottom: 15px;
    -moz-background: $gradient-right;
    -webkit-background: $gradient-right;
    background: $gradient-right;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
    }

    .heading {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .icon {
        width: 35px;
        margin-right: 10px;
        border-radius: 50%;
        -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
      }
    }
  }
}
</style>