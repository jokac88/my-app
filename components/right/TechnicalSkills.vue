<template>
  <section class="technical-skills">
    <HeaderShape
      :heading="$route.path === '/' ? 'Technical Skills' : 'Tehničke Veštine'"
      property="technical-skills"
    />
    <b-collapse id="technical-skills" visible>
      <b-row>
        <TechnicalSkillsCircle
          v-for="technology in technicalSkills"
          :key="technology.technology || technology.tehnologija"
          :technology="technology"
          :technologyImage="technology.class || technology.klasa"
          :darkMode="darkMode"
        />
      </b-row>
    </b-collapse>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderShape from "@/components/right/HeaderShape.vue";
import TechnicalSkillsCircle from "@/components/TechnicalSkillsCircle.vue";

export default {
  props: {
    technicalSkills: Array,
  },
  components: {
    HeaderShape,
    TechnicalSkillsCircle,
  },
  computed: mapState({
    darkMode: (state) => state.store.darkMode,
  }),
};
</script>

<style lang="scss">
#technical-skills {
  .technical-skills-circle {
    .c100 {
      margin: 0 auto 25px;
      float: none;

      .logo {
        width: 70px;
      }
    }

    &:nth-last-child(-n + 3) {
      .c100 {
        margin-bottom: 0;
      }
    }
  }

  .technical-skills-text {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>