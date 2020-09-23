<template>
  <div class="header-left">
    <div class="header-left-wrapper">
      <div class="heading">
        <component :is="property" class="icon" />
        <h4>{{ heading }}</h4>
      </div>
      <ButtonToggle :property="property" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PersonalInfo from "@/assets/svg/headers/personal-info.svg?inline";
import Languages from "@/assets/svg/headers/languages.svg?inline";
import Projects from "@/assets/svg/headers/projects.svg?inline";
import Hobbies from "@/assets/svg/headers/hobbies.svg?inline";
import DrivingLicense from "@/assets/svg/headers/driving-license.svg?inline";
import ButtonToggle from "@/components/ButtonToggle.vue";

export default {
  components: {
    PersonalInfo,
    Languages,
    Projects,
    Hobbies,
    DrivingLicense,
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
    -moz-background: $gradient-right;
    -webkit-background: $gradient-right;
    background: $gradient-right;
    margin-bottom: 15px;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;

      .heading {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          width: 35px;
          height: 35px;
          margin-right: 15px;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          border-radius: 50%;
          -webkit-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
        }

        h4 {
          font-weight: 700;
        }
      }
    }
  }
}
</style>