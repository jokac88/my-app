<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch("store/fetchData", "/en");
    } catch (e) {
      error({
        message: "Not loading page",
      });
    }
  },
  async mounted() {
    await this.localStorage();
  },
  methods: {
    localStorage() {
      localStorage.setItem("data", JSON.stringify(this.data));
    },
  },
  computed: mapState({
    data: (state) => state.store.data,
  }),
};
</script>