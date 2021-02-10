import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = () => import('@/views/dashboard/Dashboard.vue');
const Home = () => import('@/views/home/Home.vue');
const Category = () => import('@/views/category/Category.vue');
const Cart = () => import('@/views/cart/Cart.vue');
const Mine = () => import('@/views/mine/Mine.vue');
const Login = () => import('@/views/login/Login.vue');
const Register = () => import('@/views/register/Register.vue');
const Order = () => import('@/views/order/Order.vue');
const myAddress = () => import('@/views/order/children/myAddress.vue');
const addAddress = () => import('@/views/order/children/addAddress.vue');

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    { path: '/', redirect: '/dashboard/home' },
    {
      path: '/dashboard', component: Dashboard, children: [
        { path: '/dashboard/home', component: Home, meta: { keepalive: true } },
        { path: '/dashboard/category', component: Category, meta: { keepalive: true } },
        { path: '/dashboard/cart', component: Cart },
        { path: '/dashboard/mine', component: Mine },
        // { path: '/dashboard/text', component: Text }
      ]
    },

    // 訂單
    { path: '/order', component: Order },
    { path: '/myaddress', component: myAddress },
    { path: '/addAddress', component: addAddress },


    { path: '/login', component: Login },
    { path: '/register', component: Register }

  ]
})