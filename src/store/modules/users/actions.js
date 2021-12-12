import UserService from '../../../services/UserService'

const getUsers = async ({ commit }) => {
  const response = await UserService.getUsers()

  localStorage.setItem('users', JSON.stringify(response.data))
  commit('setUsers', response.data)
}

const setSelectedUser = async ({ commit }, user) => {
  localStorage.setItem('selectedUser', JSON.stringify(user))
  commit('setSelectedUser', user)
}

export default {
  getUsers,
  setSelectedUser,
}
