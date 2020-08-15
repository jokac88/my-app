<template>
  <!-- <Page :data="data" /> -->
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
      await store.dispatch("store/fetchData", "/b/5f385b944d93991036158b16");
      // await store.dispatch("store/fetchData", "/rs");
    } catch (e) {
      error({
        message: "Greška",
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
    data: (state) => state.store.data.rs,
  }),
};
</script>