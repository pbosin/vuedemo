import accounts from '../../api/accounts'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allAccounts: state => state.all
}

// actions
const actions = {
  getAllAccounts({ commit }) {
    accounts.getAccounts(data => {
      commit('GET ACCOUNTS', { data })
    })
  }
}

const mutations = {
  ['GET ACCOUNTS'] (state, {data}) {
    state.all = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
