<template>
  <section class="education">
    <HeaderRight :heading="$route.path === '/' ? 'Education' : 'Obrazovanje'" property="education" />
    <b-collapse id="education" visible>
      <div class="education-wrapper">
        <b-row v-for="(education, index) in educations" :key="education.year || education.godina">
          <b-col
            v-if="key !== 'description' && key !== 'opis'"
            v-for="(value, key, index) in education"
            :key="index"
            sm="6"
          >
            <p class="property">{{ key | capitalize }}</p>
            <p v-html="value" class="value"></p>
          </b-col>
          <b-col v-else cols="12">
            <p class="property">{{ key | capitalize }}</p>
            <p class="value">{{ value.text || value.tekst }}</p>
            <ul>
              <li
                v-for="technologies in value.technologies || value.tehnologije"
                :key="technologies"
              >{{ technologies }}</li>
            </ul>
          </b-col>
          <hr v-if="index !== educations.length - 1" class="gradient gradient-small" />
        </b-row>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderRight from "@/components/right/HeaderRight.vue";

export default {
  props: {
    educations: Array,
  },
  components: {
    HeaderRight,
  },
};
</script>

<style lang="scss">
.education {
  &-wrapper {
    padding: 0 15px;
  }

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