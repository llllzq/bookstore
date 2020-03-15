import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/test.vue'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Home from '../components/home.vue'
import Cultural from '../components/bookCategory/cultural.vue'
import Cart from '../components/shoppingCart.vue'
import BookDetail from '../components/bookDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/test', component: Test },
  // 路由重定向，/跳转到登录页面
  { path: '/', redirect: '/login' },
  {
    path: '/login', component: Login
  },
  {
    path: '/index',
    component: Index,
    children: [
      { path: '/index', redirect: '/home' },
      { path: '/home', component: Home },
      { path: '/Category/cultural', component: Cultural }
    ]
  },
  { path: '/book/:id', component: BookDetail },
  { path: '/cart', component: Cart }

]

const router = new VueRouter({
  routes
})

export default router
