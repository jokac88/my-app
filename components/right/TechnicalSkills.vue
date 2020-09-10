<template>
  <section class="technical-skills">
    <HeaderRight
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
        />
      </b-row>
    </b-collapse>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderRight from "@/components/right/HeaderRight.vue";
import TechnicalSkillsCircle from "@/components/TechnicalSkillsCircle.vue";

export default {
  props: {
    technicalSkills: Array,
  },
  components: {
    HeaderRight,
    TechnicalSkillsCircle,
  },
};
</script>

<style lang="scss">
#technical-skills {
  .technical-skills-circle {
    .c100 {
      margin: 0 auto 25px;
      float: none;
      font-size: 130px;

      &::after {
        background-color: var(--bg-right);
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
      }

      .logo {
        width: 100px;
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