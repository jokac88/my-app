<template>
  <section class="employment-history">
    <HeaderRight
      :heading="$route.path === '/' ? 'Employment History' : 'Istorija Zapošljavanja'"
      property="employment-history"
    />
    <b-collapse id="employment-history" visible>
      <div class="employment-history-wrapper">
        <b-row
          v-for="(employmentHistory, index) in employmentHistories"
          :key="employmentHistory.year || employmentHistory.godina"
        >
          <b-col
            v-if="key === 'year' || key === 'godina' || key === 'company' || key === 'firma' || key === 'club' || key === 'klub'"
            v-for="(value, key, index) in employmentHistory"
            :key="index"
            sm="6"
          >
            <p class="property">{{ key | capitalize }}</p>
            <p v-html="value" class="value"></p>
          </b-col>
          <b-col v-else-if="key === 'position' || key === 'pozicija'" cols="12">
            <p class="property">{{ key | capitalize }}</p>
            <p v-html="value" class="value"></p>
          </b-col>
          <b-col v-else cols="12">
            <p class="property">{{ key | capitalize }}</p>
            <ul>
              <li v-for="description in value" :key="description">{{ description }}</li>
            </ul>
          </b-col>
          <hr v-if="index !== employmentHistories.length - 1" class="hr-gradient hr-gradient-small" />
        </b-row>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderRight from "@/components/right/HeaderRight.vue";

export default {
  props: {
    employmentHistories: Array,
  },
  components: {
    HeaderRight,
  },
};
</script>

<style lang="scss">
.employment-history {
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