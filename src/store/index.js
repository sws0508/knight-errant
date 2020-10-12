import Vue from "vue";
import Vuex from "vuex";

import {getRecommends} from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recommendList: [],
  },
  mutations: {
    getRecommends(state,payload){
      state.recommendList = payload.data;
    }
  },
  actions: {
    async getRecommends({commit}){
      const res = await getRecommends();
      commit("getRecommends",res)
    }
  },
  modules: {}
});
