<template>
  <b-col lg="10" class="page px-0">
    <b-row no-gutters>
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
      <b-col md="7" lg="8" class="p-4">
        <section>
          <h1>About Me</h1>
          <div>{{ data.aboutMe }}</div>
        </section>
        <section>
          <h1>Technical Skills</h1>
          <b-row>
            <b-col
              v-for="technology in data.technicalSkills"
              :key="technology.technology"
              cols="4"
              class="technical-skills-circle"
            >
              <p
                class="technical-skills-text"
                :class="technology.class + '-p'"
                :style="{ color: technology.color }"
              >{{ technology.technology }}</p>
              <div class="c100" :class="[technology.class, 'p' + technology.percentage]">
                <span>
                  <img
                    class="logo"
                    :src="require('~/assets/icon/' + technology.class + '.png')"
                    :title="technology.technology"
                    :alt="require('~/assets/icon/' + technology.class + '.png')"
                  />
                </span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
            </b-col>
          </b-row>
        </section>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
import Picture from "@/components/Picture.vue";
import Name from "@/components/Name.vue";
import Headline from "@/components/Headline.vue";
import QrCode from "@/components/Qr-code.vue";
import Portfolio from "@/components/Portfolio.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import Languages from "@/components/Languages.vue";
import Projects from "@/components/Projects.vue";
import Hobbies from "@/components/Hobbies.vue";
import DrivingLicense from "@/components/DrivingLicense.vue";

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
  },
};
</script>

<style lang="scss">
.left {
  background-color: $blue-light;
  color: $white;
}
.technical-skills-text {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.logo {
  width: 70px;
}

.c100 {
  margin: 0 auto 25px;
  float: none;
}

#technicalSkillsCollapse {
  .c100 {
    margin-bottom: 25px;
  }
}
</style>