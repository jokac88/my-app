import axios from "@/services/axios.js";

export const state = () => ({
  aboutMe: {}
});

export const mutations = {
  SET_ABOUT_ME(state, aboutMe) {
    state.aboutMe = aboutMe;
  }
};

export const actions = {
  fetchAboutMe({ commit }) {
    return axios.getAboutMe().then(({ data }) => {
      commit("SET_ABOUT_ME", data);
    });
  }
};
