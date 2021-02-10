import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局样式
import './style/common.less'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)


// 引入rem
import './config/rem.js'
import './config/filters'


// store
import store from '@/store/index'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
