<template>
  <section class="header-right">
    <div class="header-shape">
      <div class="shape">
        <div class="header-shape-wrapper">
          <component :is="property" class="icon" />
          <h4>{{ heading }}</h4>
        </div>
      </div>
      <ButtonToggle :property="property" />
    </div>
    <hr class="gradient" />
  </section>
</template>

<script>
import AboutMe from "@/assets/svg/headers/about-me.svg?inline";
import Education from "@/assets/svg/headers/education.svg?inline";
import EmploymentHistory from "@/assets/svg/headers/employment-history.svg?inline";
import TechnicalSkills from "@/assets/svg/headers/technical-skills.svg?inline";
import ButtonToggle from "@/components/ButtonToggle.vue";

export default {
  props: {
    heading: String,
    property: String,
  },
  components: {
    AboutMe,
    Education,
    EmploymentHistory,
    TechnicalSkills,
    ButtonToggle,
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
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
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
        height: 35px;
        margin-right: 10px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
      }

      h4 {
        color: var(--color-left);
        font-weight: 700;
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