<template>
  <section id="technical-skills" class="technical-skills">
    <HeaderRight
      :heading="$route.path === '/' ? 'Technical Skills' : 'Tehničke Veštine'"
      property="technical-skills"
    />
    <b-collapse id="technical-skills-collapse" visible>
      <b-row>
        <TechnicalSkill
          v-for="technology in technicalSkills"
          :key="technology.technology || technology.tehnologija"
          :technology="technology"
          :technologyImage="technology.icon || technology.ikonica"
        />
      </b-row>
    </b-collapse>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderRight from "@/components/right/HeaderRight.vue";
import TechnicalSkill from "@/components/TechnicalSkill.vue";

export default {
  props: {
    technicalSkills: Array,
  },
  components: {
    HeaderRight,
    TechnicalSkill,
  },
};
</script>

<style lang="scss"></style>