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
      await store.dispatch("store/fetchData", "/b/5f4bc5b2993a2e110d39a754");
      // await store.dispatch("store/fetchData", params.lang || "/rs");
    } catch (e) {
      error({
        message: "Greška",
      });
    }
  },
  // async mounted() {
  //   await this.localStorage();
  // },
  // methods: {
  //   localStorage() {
  //     localStorage.setItem("data", JSON.stringify(this.data));
  //   },
  // },
  computed: mapState({
    data: (state) => state.store.data.rs,
  }),
};
</script>