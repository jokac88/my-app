<template>
  <section class="education">
    <HeaderShape :heading="$route.path === '/' ? 'Education' : 'Obrazovanje'" property="education" />
    <b-collapse id="education" visible>
      <b-row v-for="(education, index) in educations" :key="education.year || education.godina">
        <b-col
          v-if="key !== 'description' && key !== 'opis'"
          v-for="(value, key, index) in education"
          :key="index"
          cols="6"
        >
          <p class="property">{{ key | capitalize }}</p>
          <p v-html="value" class="value"></p>
        </b-col>
        <b-col v-else>
          <p class="property">{{ key | capitalize }}</p>
          <p class="value">{{ value.text || value.tekst }}</p>
          <ul>
            <li
              v-for="technologies in value.technologies || value.tehnologije"
              :key="technologies"
            >{{ technologies }}</li>
          </ul>
        </b-col>
        <hr v-if="index !== educations.length - 1" />
      </b-row>
    </b-collapse>
  </section>
</template>

<script>
import HeaderShape from "@/components/right/HeaderShape.vue";

export default {
  props: {
    educations: Array,
  },
  components: {
    HeaderShape,
  },
};
</script>

<style lang="scss">
#education {
  .property {
    padding-bottom: 5px;
    font-weight: 700;
  }

  .value {
    padding-bottom: 15px;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 25px;

    li {
      list-style-type: disc;
    }
  }
}
</style>