<template>
  <div>
    <h1>{{ data.ime }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch("store/fetchData", "/rs");
    } catch (e) {
      error({
        message: "Error",
      });
    }
  },
  computed: mapState({
    data: (state) => state.store.data,
  }),
};
</script>