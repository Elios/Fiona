import { SET_UNAME } from '../mutation-types'

const state = {}

sessionStorage.getItem('state.user')
  ? Object.assign(state, JSON.parse(sessionStorage.getItem('state.user')))
  : Object.assign(state, { uname: undefined })

const getters = {}

const actions = {}

const mutations = {
  [SET_UNAME] (stat, payload) {
    Reflect.set(stat, 'uname', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
