import axios from "@/services/axios.js";

export const state = () => ({
  data: {},
  loading: false,
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
  async fetchData({ commit, dispatch }, { url, lang }) {
    commit("SET_LOADING", true);
    const response = await axios.getData(url);
    if (process.env.NODE_ENV === "production") {
      commit("SET_DATA", response.data[lang]);
      return;
    }
    commit("SET_DATA", response.data);
    if (response.status === 200) {
      dispatch("loading", { loading: false, duration: 1500 });
    }
  },
  loading({ commit }, { loading, duration }) {
    setTimeout(() => {
      commit("SET_LOADING", loading);
    }, duration);
  },
  toggleDarkMode({ commit }) {
    commit("SET_DARKMODE");
  }
};
