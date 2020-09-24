import axios from "@/services/axios.js";

export const state = () => ({
  data: {
    name: "ivan"
  },
  isLoading: false,
  isToggle: false,
  paceWidth: 0
});

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
  SET_LOADING(state, loading) {
    state.isLoading = loading;
  },
  SET_TOGGLE(state) {
    state.isToggle = !state.isToggle;
  },
  SET_PACE_WIDTH(state, paceWidth) {
    state.paceWidth = paceWidth;
  }
};

export const actions = {
  async fetchData({ commit, dispatch }, { lang }) {
    commit("SET_LOADING", true);
    const response = await axios.getData(lang);
    commit("SET_DATA", response.data);
    if (response.status === 200) {
      dispatch("loading", { loading: false, duration: 1500 });
    }
  },
  loading({ commit }, { loading, duration }) {
    setTimeout(() => {
      commit("SET_LOADING", loading);
    }, duration);
  }
};
