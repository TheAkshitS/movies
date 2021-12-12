import Vue from 'vue'
import Vuex from 'vuex'

import AppModule from './modules/app'
import UsersModule from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: AppModule,
    users: UsersModule,
  },
})

export default store
