import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios.js';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import 'popper.js'
import '../public/js/jquery-3.2.1.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index-et.css';


Vue.use(ElementUI);

Vue.config.productionTip = false
//window.eventBus=new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
