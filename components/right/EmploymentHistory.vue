<template>
  <section>
    <HeaderShape heading="Employment History" property="employment-history" />
    <b-collapse id="employment-history" visible>
      <b-row
        v-for="(employmentHistory, index) in data.employmentHistory"
        :key="employmentHistory.year"
        class="wrapper"
      >
        <b-col
          v-if="key !== 'description'"
          v-for="(value, key, index) in employmentHistory"
          :key="index"
          lg="6"
        >
          <p class="property">{{ key | capitalize }}</p>
          <p v-html="value" class="value"></p>
        </b-col>
        <b-col v-else>
          <p class="property">{{ key | capitalize }}</p>
          <ul>
            <li v-for="description in value" :key="description">{{ description }}</li>
          </ul>
        </b-col>
        <hr v-if="index !== data.employmentHistory.length - 1" />
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
};
</script>

<style lang="scss">
#employment-history {
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