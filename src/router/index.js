import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () =>
      import(/* webpackChunkName: "Movie" */ '../views/Movie.vue'),
  },
]

const router = new VueRouter({
  routes,
})

// navigation guard
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('selectedUser')) next({ name: 'Login' })
  if (to.name === 'Login' && localStorage.getItem('selectedUser')) next({ name: 'Home' })
  else next()
})

export default router
