<template>
  <b-col lg="10" class="page px-0">
    <b-row no-gutters>
      <!-- Left -->
      <b-col md="5" lg="4" class="left">
        <!-- Picture -->
        <Picture :data="data" />

        <!-- Name -->
        <Name :data="data" />

        <!-- Headline -->
        <Headline :data="data" />

        <!-- QR Code -->
        <QrCode :data="data" />

        <!-- Portfolio -->
        <Portfolio :data="data" />

        <!-- Personal Info -->
        <PersonalInfo :data="data" />

        <!-- Languages -->
        <Languages :data="data" />

        <!-- Projects -->
        <Projects :data="data" />

        <!-- Hobbies -->
        <Hobbies :data="data" />

        <!-- Driving License -->
        <DrivingLicense :data="data" />
      </b-col>
      <!-- Right -->
      <b-col md="7" lg="8" class="right">
        <div class="wrapper">
          <!-- About Me -->
          <AboutMe :data="data" />

          <!-- Technical Skills -->
          <TechnicalSkills :data="data" />
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
import Picture from "@/components/left/Picture.vue";
import Name from "@/components/left/Name.vue";
import Headline from "@/components/left/Headline.vue";
import QrCode from "@/components/left/Qr-code.vue";
import Portfolio from "@/components/left/Portfolio.vue";
import PersonalInfo from "@/components/left/PersonalInfo.vue";
import Languages from "@/components/left/Languages.vue";
import Projects from "@/components/left/Projects.vue";
import Hobbies from "@/components/left/Hobbies.vue";
import DrivingLicense from "@/components/left/DrivingLicense.vue";
import AboutMe from "@/components/right/AboutMe.vue";
import TechnicalSkills from "@/components/right/TechnicalSkills.vue";

export default {
  props: {
    data: Object,
  },
  components: {
    Picture,
    Name,
    Headline,
    QrCode,
    Portfolio,
    PersonalInfo,
    Languages,
    Projects,
    Hobbies,
    DrivingLicense,
    AboutMe,
    TechnicalSkills,
  },
};
</script>

<style lang="scss">
.left {
  background-color: $deep-cerulean;
  color: $white;
}

.right {
  background-color: $white;
  color: $orient;

  .wrapper {
    padding: 20px;
  }
}
</style>