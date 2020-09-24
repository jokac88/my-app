<template>
  <Page :data="data" />
</template>

<script>
import Page from "@/components/Page.vue";
import { mapState } from "vuex";

export default {
  components: {
    Page,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("store/fetchData", {
        lang: "/en",
      });
    } catch (e) {
      error({
        message: "Check the internet connection",
      });
    }
  },
  computed: mapState({
    data: (state) => state.store.data,
  }),
};
</script>