const json = require("~/assets/json/content.json");

export const strict = false;

export const state = () => ({
  content: null,
  index: null
});

export const getters = {
  getCurrentContent: state => {
    return state.content.flowers[state.index];
  }
};

export const mutations = {
  setAppContent: (state, value) => {
    state.content = value;
  },
  setAppIndex: (state, value) => {
    state.index = value;
  }
};

export const actions = {
  nuxtServerInit({ commit }) {
    commit("setAppContent", json);
  }
};
