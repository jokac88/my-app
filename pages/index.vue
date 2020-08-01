<template>
  <div>
    <h1>{{ personalInfo.firstName }}</h1>
    <h3>{{ personalInfo.lastName }}</h3>
    <h6>{{ personalInfo.age }}</h6>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: "Ivan Jovkovic | Front-End Developer",
    };
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("personalInfo/fetchPersonalInfo");
    } catch (e) {
      error({
        message: "Error",
      });
    }
  },
  computed: mapState({
    personalInfo: (state) => state.personalInfo.personalInfo,
  }),
};
</script>