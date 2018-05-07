// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Media from 'vue-media'
import axios from 'axios'


let host = "http://dev.tunnelmall.com/";
// if (window.localStorage.token)
//   axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.token}`;
axios.defaults.baseURL = host + "api";
Vue.use(axios)
window.host = host;
window.axios = axios;

// import Paginate from 'vuejs-paginate'
// Vue.use(Paginate)
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(Vuetify)
Vue.use(ElementUI);
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/bootstrap/bootstrap.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Media },
  template: '<App/>'
})
