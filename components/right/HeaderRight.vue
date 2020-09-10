<template>
  <section class="header-right">
    <div class="header-shape">
      <div class="shape">
        <div class="header-shape-wrapper">
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
    <hr class="hr-gradient" />
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
  &-shape {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .shape {
      margin-left: 15px;
      transform: skew(-30deg);
      -webkit-transform: skew(-30deg);
      -moz-transform: skew(-30deg);
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-background: $gradient-right;
      -webkit-background: $gradient-right;
      background: $gradient-right;
    }

    &-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 20px;
      -webkit-transform: skew(30deg);
      -moz-transform: skew(30deg);
      transform: skew(30deg);

      .icon {
        width: 35px;
        margin-right: 10px;
        border-radius: 50%;
        -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
      }

      h4 {
        color: var(--color-left);
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
      }
    }
  }
}
</style>