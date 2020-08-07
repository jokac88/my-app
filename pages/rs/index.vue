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
      await store.dispatch("store/fetchData", "/b/5f2d9a36dddf413f95bf2958");
    } catch (e) {
      error({
        message: "Greška",
      });
    }
  },
  mounted() {
    this.localStorage();
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