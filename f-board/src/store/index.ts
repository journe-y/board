import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: localStorage.getItem('userid') ?? null,
    onModal: false,
    showAlerts: false,
    alertInfo: "",
    alertType:""
  },
  mutations: {
    SET_AUTH(state, value) {
      state.userid = value;
    },
    SET_ON_MODAL(state, value) {
      state.onModal = value;
    },
    OPEN_ALERTS(state, value) {
      state.showAlerts = true;
      state.alertInfo = value.text;
      state.alertType = value.type;

    },
    CLOSE_ALERTS(state, value) {
      state.showAlerts = false;
      state.alertInfo = "";
    }
  },
  actions: {
    openAlert({ commit }, alertInfo) {
      commit("OPEN_ALERTS", alertInfo)
      setTimeout(() => {
        commit('CLOSE_ALERTS');
      }, 3000)
    },
  },
  modules: {
  }
})
