import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
// import Vue from 'vue'
import page1 from '../components/pages/page1'
import page2 from '../components/pages/page2'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ASelect from '../components/Utils/ASelect'
import search_result from '../components/search_result'
import pages from '../components/Utils/APagination'
import res from '../components/Utils/AResult'
import search2 from '../components/search_filter'
import footer1 from '../components/AFooter'
import table1 from '../components/Utils/ATable'
import test1 from '../components/Utils/test1'
import nav1 from '../components/Utils/Navbar'
import bRes from '../components/Utils/BResult'
import tab_info from '../components/information_tab'

Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  routes: [
     {
       path: '/page2',
       name: 'page2',
       component: page2
     },
    {
      path: '/search',
      name: 'header',
      component: res
    },
    {
      path: '/search3',
      name: 'search',
      component: search_result
    },
    {
      path: '/',
      name: 'page1',
      component: page1,
      children:[
        {
          path:'table1',
          name:'table1',
          component:table1
        },
        {
          path:'/',
          name:'search_result1',
          component:search_result
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: tab_info
    },

  ]
})
