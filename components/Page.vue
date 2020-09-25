<template>
  <b-container class="p-0">
    <section
      id="page"
      class="page"
      v-touch:swipe.right="swipeRight"
      :class="{ isToggle: isToggle }"
    >
      <b-col class="page-col border-gradient" lg="10">
        <b-row no-gutters>
          <!-- Left -->
          <b-col md="5" lg="4" class="left">
            <!-- Picture -->
            <Picture
              :picture="data.picture || data.slika"
              :name="data.name || data.ime"
            />

            <!-- Name -->
            <Name :name="data.name || data.ime" />

            <!-- Headline -->
            <Headline :headline="data.headline || data.naslov" />

            <!-- QR Code -->
            <QrCode />

            <!-- Portfolio -->
            <Portfolio />

            <!-- Personal Info -->
            <PersonalInfo
              :personalInfo="data.personalInfo || data.ličniPodaci"
            />

            <!-- Languages -->
            <Languages :languages="data.languages || data.jezici" />

            <!-- Projects -->
            <Projects :projects="data.projects || data.projekti" />

            <!-- Hobbies -->
            <Hobbies :hobbies="data.hobbies || data.hobiji" />

            <!-- Driving License -->
            <DrivingLicense
              :drivingLicense="data.drivingLicense || data.vozačkaDozvola"
            />
          </b-col>
          <!-- Right -->
          <b-col md="7" lg="8" class="right">
            <div class="right-wrapper" :class="{ 'remove-pb': removePB }">
              <!-- About Me -->
              <AboutMe :aboutMe="data.aboutMe || data.oMeni" />

              <!-- Education -->
              <Education :educations="data.education || data.obrazovanje" />

              <!-- Employment History -->
              <EmploymentHistory
                :employmentHistories="
                  data.employmentHistory || data.istorijaZapošljavanja
                "
              />

              <TechnicalSkills
                :technicalSkills="data.technicalSkills || data.tehničkeVeštine"
              />
              <!-- Technical Skills -->
            </div>
          </b-col>
        </b-row>
      </b-col>
    </section>
  </b-container>
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
  data: () => ({
    removePB: false,
  }),
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
  methods: {
    swipeRight(direction) {
      this.$store.commit("store/SET_TOGGLE");
    },
  },
  computed: mapState({
    isToggle: (state) => state.store.isToggle,
  }),
  mounted() {
    this.$bus.$on("remove-pb", (value) => {
      this.removePB = value;
    });
  },
};
</script>

<style lang="scss">
.page {
  padding: 15px 0;
  -webkit-transition: $transition-2;
  -moz-transition: $transition-2;
  -o-transition: $transition-2;
  -ms-transition: $transition-2;
  transition: $transition-2;

  @include media-breakpoint-down(sm) {
    padding: 55px 0 0;
    position: relative;
    left: 0;
  }

  &.isToggle {
    @include media-breakpoint-down(sm) {
      left: 80%;
    }

    @include media-breakpoint-only(sm) {
      left: 60%;
    }
  }

  .page-col {
    margin: 0 auto;
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;
    z-index: 3;

    &.border-gradient {
      @include media-breakpoint-down(sm) {
        padding: 0;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
      }
    }

    .left {
      background-color: var(--bg-left);
      color: var(--color-left);
      -moz-border-radius: 3px 0 0 3px;
      -webkit-border-radius: 3px 0 0 3px;
      border-radius: 3px 0 0 3px;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;

      @include media-breakpoint-down(sm) {
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
      }
    }

    .right {
      background-color: var(--bg-right);
      color: var(--color-right);
      -moz-border-radius: 0 3px 3px 0;
      -webkit-border-radius: 0 3px 3px 0;
      border-radius: 0 3px 3px 0;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;

      @include media-breakpoint-down(sm) {
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
      }

      &-wrapper {
        padding: 15px;
        -webkit-transition: padding $transition-2;
        -moz-transition: padding $transition-2;
        -o-transition: padding $transition-2;
        -ms-transition: padding $transition-2;
        transition: padding $transition-2;

        &.remove-pb {
          padding-bottom: 0;
        }
      }
    }
  }
}
</style>