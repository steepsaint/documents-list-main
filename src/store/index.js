import Vue from "vue";
import Vuex from "vuex";

import dragdrop from "./dragdrop";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    dragdrop,
  },
});
