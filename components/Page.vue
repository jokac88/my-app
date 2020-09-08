<template>
  <section id="page" class="page" :class="{ active : isToggle }">
    <b-container class="p-0">
      <b-col class="page-col px-0" lg="10">
        <b-row no-gutters>
          <!-- Left -->
          <b-col md="5" lg="4" class="left">
            <!-- Picture -->
            <Picture :picture="data.picture || data.slika" :name="data.name || data.ime" />

            <!-- Name -->
            <Name :name="data.name || data.ime" />

            <!-- Headline -->
            <Headline :headline="data.headline || data.naslov" />

            <!-- QR Code -->
            <QrCode />

            <!-- Portfolio -->
            <Portfolio :data="data" />

            <!-- Personal Info -->
            <PersonalInfo :personalInfo="data.personalInfo || data.ličniPodaci" />

            <!-- Languages -->
            <Languages :languages="data.languages || data.jezici" />

            <!-- Projects -->
            <Projects :projects="data.projects || data.projekti" />

            <!-- Hobbies -->
            <Hobbies :hobbies="data.hobbies || data.hobiji" />

            <!-- Driving License -->
            <DrivingLicense :drivingLicense="data.drivingLicense || data.vozačkaDozvola" />
          </b-col>

          <!-- Right -->
          <b-col md="7" lg="8" class="right">
            <div class="right-wrapper">
              <!-- About Me -->
              <AboutMe :aboutMe="data.aboutMe || data.oMeni" />

              <!-- Education -->
              <Education :educations="data.education || data.obrazovanje" />

              <!-- Employment History -->
              <EmploymentHistory
                :employmentHistories="data.employmentHistory || data.istorijaZapošljavanja"
              />

              <TechnicalSkills :technicalSkills="data.technicalSkills || data.tehničkeVeštine" />
              <!-- Technical Skills -->
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-container>
  </section>
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
import Education from "@/components/right/Education.vue";
import EmploymentHistory from "@/components/right/EmploymentHistory.vue";
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
    Education,
    EmploymentHistory,
    TechnicalSkills,
  },
  computed: mapState({
    isToggle: (state) => state.store.isToggle,
  }),
};
</script>

<style lang="scss">
.page {
  padding: 15px 0;
  position: relative;
  background-color: transparent;
  // height: 1500px;
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;
  z-index: 2;

  @include media-breakpoint-down(sm) {
    padding: 50px 0 0;
  }

  &.active {
    @include media-breakpoint-down(sm) {
      transform: translate3d(80%, 0, 0);
    }

    @include media-breakpoint-only(sm) {
      transform: translate3d(60%, 0, 0);
    }
  }

  .page-col {
    margin: 0 auto;
    background-color: var(--bg-page);
    border: 3px double $orient;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;

    @include media-breakpoint-down(sm) {
      margin: 0 auto;
      border: none;
    }

    .left {
      background-color: var(--bg-left);
      color: var(--color-left);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
    }

    .right {
      background-color: var(--bg-right);
      color: var(--color-right);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;

      &-wrapper {
        padding: 15px;
      }
    }
  }
}
</style>