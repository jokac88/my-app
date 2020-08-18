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
      await store.dispatch("store/fetchData", "/b/5f3c35bbb88c04101cf6aaf6");
      // await store.dispatch("store/fetchData", params.lang || "/en");
    } catch (e) {
      error({
        message: "Not loading page",
      });
    }
  },
  async mounted() {
    await this.localStorage(this.data);
  },
  methods: {
    localStorage() {
      localStorage.setItem("data", JSON.stringify(this.data));
    },
  },
  computed: mapState({
    data: (state) => state.store.data.en,
  }),
};
</script>