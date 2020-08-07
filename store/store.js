import axios from "@/services/axios.js";

export const state = () => ({
  data: {}
});

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  }
};

export const actions = {
  async fetchData({ commit }, lang) {
    const { data } = await axios.getData(lang);
    commit("SET_DATA", data);
  }
};
