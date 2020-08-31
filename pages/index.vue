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
    store.commit("store/SET_LOADING", true);
    try {
      if (process.env.NODE_ENV === "production") {
        await store.dispatch("store/fetchData", {
          url: "/b/5f4bc59a993a2e110d39a747",
          lang: "en",
        });
      } else {
        await store.dispatch("store/fetchData", {
          url: params.lang || "/en",
        });
      }
    } catch (e) {
      error({
        message: "Check the internet connection",
      });
    }
  },
  // async mounted() {
  //   await this.localStorage(this.data);
  // },
  // methods: {
  //   localStorage() {
  //     localStorage.setItem("data", JSON.stringify(this.data));
  //   },
  // },
  computed: mapState({
    data: (state) => state.store.data,
  }),
};
</script>