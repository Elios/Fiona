import { SET_UNAME } from '../mutation-types'

const state = {
  uname: JSON.parse(sessionStorage.getItem('uname')) || undefined
}

const getters = {
}

const actions = {}

const mutations = {
  [SET_UNAME] (stat, payload) {
    Reflect.set(stat, 'uname', payload)
    payload
      ? sessionStorage.setItem('uname', payload)
      : sessionStorage.removeItem('uname')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
