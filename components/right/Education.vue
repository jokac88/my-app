<template>
  <section>
    <HeaderShape heading="Education" property="education" />
    <b-collapse id="education" visible>
      <b-row v-for="education in data.education" :key="education.year" class="wrapper">
        <b-col
          v-if="key !== 'description'"
          v-for="(value, key, index) in education"
          :key="value"
          lg="6"
        >
          <p class="property">{{ key | capitalize }}</p>
          <p v-html="value" class="value"></p>
        </b-col>
        <b-col v-else>
          <p class="property">{{ key | capitalize }}</p>
          <p class="value">{{ value.text }}</p>
          <ul>
            <li v-for="technologies in value.technologies" :key="technologies">{{ technologies }}</li>
          </ul>
        </b-col>
        <hr />
      </b-row>
    </b-collapse>
  </section>
</template>

<script>
import HeaderShape from "@/components/right/HeaderShape.vue";

export default {
  props: {
    data: Object,
  },
  components: {
    HeaderShape,
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style lang="scss">
#education {
  .wrapper {
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