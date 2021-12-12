import actions from './actions'
import mutations from './mutations'

const state = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  selectedUser: JSON.parse(localStorage.getItem('selectedUser')) || [],
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
