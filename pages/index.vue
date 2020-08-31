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
  async fetch({ store, params, error }) {
    try {
      if (process.env.NODE_ENV === "production") {
        await store.dispatch("store/fetchData", {
          url: "/b/5f4bc59a993a2e110d39a747",
          lang: "en",
        });
        return;
      }
      await store.dispatch("store/fetchData", {
        url: params.lang || "/en",
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