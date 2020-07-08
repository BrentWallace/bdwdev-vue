import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store' 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
  store,
}).$mount('#app')
