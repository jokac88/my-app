<template>
  <b-col lg="10" class="page px-0">
    <b-row no-gutters>
      <!-- Left -->
      <b-col md="5" lg="4" class="left" :class="{ 'dark-mode' : darkMode }">
        <!-- Picture -->
        <Picture :picture="data.picture || data.slika" :name="data.name || data.ime" />

        <!-- Name -->
        <Name :name="data.name || data.ime" />

        <!-- Headline -->
        <Headline :headline="data.headline || data.naslov" />

        <!-- QR Code -->
        <QrCode :data="data" />

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
      <b-col md="7" lg="8" class="right" :class="{ 'dark-mode' : darkMode }">
        <div class="wrapper">
          <!-- About Me -->
          <AboutMe :aboutMe="data.aboutMe || data.oMeni" />

          <!-- Education -->
          <Education :educations="data.education || data.obrazovanje" />

          <!-- Employment History -->
          <EmploymentHistory
            :employmentHistories="data.employmentHistory || data.istorijaZapošljavanja"
          />

          <!-- Technical Skills -->
          <TechnicalSkills :technicalSkills="data.technicalSkills || data.tehničkeVeštine" />
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
    darkMode: (state) => state.store.darkMode,
  }),
};
</script>

<style lang="scss"></style>