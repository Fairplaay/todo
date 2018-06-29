import Vue from 'vue'
import Router from 'vue-router'
import crud from '../components/private/crud'
import login from '../components/auth/Login'

Vue.use(Router)

function requireAuth (to, from, next) {
  let auth = true
  if (auth == false) { /// THIS NOT WORK, HOW TO ACCESS STORE?
    next('/login')
  } else {
    next()
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'crud',
      component: crud,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})