import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMember: localStorage.getItem('accessToken') ? true : false,
    onModal: false
  },
  mutations: {
    SET_AUTH(state, value) {
      state.isMember = value;
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
