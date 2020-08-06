import axios from "@/services/axios.js";

export const state = () => ({
  data: {}
});

export const mutations = {
  SET_DATA(state, data) {
    localStorage.setItem("data", JSON.stringify(data));
    state.data = data;
  }
};

export const actions = {
  fetchData({ commit }, lang) {
    return axios.getData(lang).then(({ data }) => {
      commit("SET_DATA", data);
    });
  }
};
