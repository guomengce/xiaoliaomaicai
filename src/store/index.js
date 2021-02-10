import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import actions from './actions.js'
import getters from './getters.js'
//可以处理异步，经过action(dispatch)->mutation->state->view
import mutations from './mutations.js' //mutation(commit)->state->view
import state from './state.js'
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
