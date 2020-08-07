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
      await store.dispatch("store/fetchData", "/b/5f2d9a046f8e4e3faf2d7584");
    } catch (e) {
      error({
        message: "Not loading page",
      });
    }
  },
  mounted() {
    this.localStorage(this.data);
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