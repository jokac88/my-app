import axios from "@/services/axios.js";

export const state = () => ({
  data: {},
  loading: true,
  darkMode: false
});

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_DARKMODE(state) {
    state.darkMode = !state.darkMode;
  }
};

export const actions = {
  async fetchData({ commit, dispatch }, lang) {
    const response = await axios.getData(lang);
    commit("SET_DATA", response.data);
    if (response.status === 200) {
      dispatch("loading", false);
    }
  },
  loading({ commit }, loading) {
    setTimeout(() => {
      commit("SET_LOADING", loading);
    }, 2500);
  },
  toggleDarkMode({ commit }) {
    commit("SET_DARKMODE");
  }
};
