import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import router from '@/router/index'
import store from '@/store/index'
import vSelect from 'vue-select' 
 
import 'vue-select/dist/vue-select.css';
import '@/assets/css/main.css'

Vue.config.productionTip = false


Vue.component('v-select', vSelect)

Vue.use(VueRouter)  
 
new Vue({
  router,
  store,
  render: h => h(App),
})
.$mount('#app')
