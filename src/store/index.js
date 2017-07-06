import Vue from 'vue'
import Vuex from 'vuex'
import accountsServ from '../api/accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: []
  },
  actions: {
    LOAD_ACCOUNTS: function ({ commit }) {
      accountsServ.getAccounts().then((response) => {
        commit('SET_ALL_ACCOUNTS', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
    //TODO
  },
  mutations: {
    SET_ALL_ACCOUNTS: (state, { list }) => {
      state.accounts = list
    }
    //TODO
  },
  getters: {
    allAccounts: state => state.accounts
    //TODO
  }
})
