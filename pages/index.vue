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
      await store.dispatch("store/fetchData", "/b/5f385b35af209d1016bc35e6");
      // await store.dispatch("store/fetchData", "/en");
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