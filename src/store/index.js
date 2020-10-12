import Vue from "vue";
import Vuex from "vuex";

import {getRecommends} from "../utils/api";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    recommendList: [],
    city: {
      name: "全国",
      cityId: 0
    }
  },
  mutations: {
    getRecommends(state,payload){
      state.recommendList = payload.data;
    },
    changeCity(state, payload) {
      state.city = payload;
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
