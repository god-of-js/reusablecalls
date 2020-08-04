import Vue from 'vue'
import App from './App.vue'
import router from './router'
 import store  from './store'
 import { post, get, Delete, format} from './helpers'
 Vue.prototype.$post = post;
 Vue.prototype.$get = get;
 Vue.prototype.$Delete = Delete;
 Vue.prototype.$format = format;
 Vue.config.productionTip = false
 new Vue({
   router,
   store,
   render: h => h(App)
  }).$mount('#app')
  // export const  db = firebase
