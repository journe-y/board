import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: localStorage.getItem('userid') ?? null,
    onModal: false
  },
  mutations: {
    SET_AUTH(state, value) {
      state.userid = value;
    },
    SET_ON_MODAL(state, value){
      state.onModal = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
