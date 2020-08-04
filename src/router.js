import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/dashboard.vue'
//import { auth } from './db'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

export default router;