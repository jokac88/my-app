import axios from "@/services/axios.js";

export const state = () => ({
  data: {},
  loading: true
});

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  }
};

export const actions = {
  async fetchData({ commit }, lang) {
    const { data } = await axios.getData(lang);
    commit("SET_DATA", data);
  },
  loading({ commit }, loading) {
    setTimeout(() => {
      commit("SET_LOADING", loading);
    }, 2000);
  }
};
