import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/test.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Index from '../components/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/test', component: Test },
  // 路由重定向，/跳转到登录页面
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/index', component: Index }

]

const router = new VueRouter({
  routes
})

export default router
