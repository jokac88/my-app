import axios from "@/services/axios.js";

export const state = () => ({
  personalInfo: {}
});

export const mutations = {
  SET_PERSONAL_INFO(state, personalInfo) {
    state.personalInfo = personalInfo;
  }
};

export const actions = {
  fetchPersonalInfo({ commit }) {
    return axios.getPersonalInfo().then(({ data }) => {
      commit("SET_PERSONAL_INFO", data);
    });
  }
};
