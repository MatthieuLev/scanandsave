// import Vue and Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// tell Vue to use Vuex
Vue.use(Vuex);

// create and export the store so it can be used everywhere in the app
export default new Vuex.Store({
  // in this object (state) we set all of the global variables
  state: {
    currentUser: null
  },
  // mutations is a list of functions for mutating (changing) the current state
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload
    }
  },
  actions: {},
});
