import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// vuetify
import Vuetify from 'vuetify'
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
