<template>
  <Stranica :data="data" />
</template>

<script>
import Stranica from "@/components/rs/Stranica.vue";
import { mapState } from "vuex";

export default {
  components: {
    Stranica,
  },
  async fetch({ store, params, error }) {
    try {
      // await store.dispatch("store/fetchData", "/b/5f385b944d93991036158b16");
      await store.dispatch("store/fetchData", params.lang || "/rs");
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
    data: (state) => state.store.data,
  }),
};
</script>