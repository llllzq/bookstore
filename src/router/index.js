import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/test.vue'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Home from '../components/home.vue'
import Cultural from '../components/bookCategory/cultural.vue'
import Art from '../components/bookCategory/art.vue'
import Child from '../components/bookCategory/child.vue'
import Education from '../components/bookCategory/education.vue'
import Live from '../components/bookCategory/live.vue'
import Novel from '../components/bookCategory/novel.vue'
import Cart from '../components/shoppingCart.vue'
import Myorder from '../components/myorder.vue'
import BookDetail from '../components/bookDetail.vue'
import MyOrder from '../components/order/myOrder.vue'
import createOrder from '../components/order/createOrder.vue'
import Unfinished from '../components/order/unfinished.vue'
import Finished from '../components/order/finished.vue'

import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Row,
  Card
} from 'element-ui'

Vue.use(VueRouter)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)

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
      { path: '/Category/cultural', component: Cultural },
      { path: '/Category/art', component: Art },
      { path: '/Category/child', component: Child },
      { path: '/Category/education', component: Education },
      { path: '/Category/live', component: Live },
      { path: '/Category/novel', component: Novel }
    ]
  },
  { path: '/book/:id', component: BookDetail },
  { path: '/cart', component: Cart },
  { path: '/:id/order', component: MyOrder },
  {
    path: '/myorder',
    component: Myorder,
    children: [
      { path: '/order/unfinished', component: Unfinished },
      { path: '/order/finished', component: Finished }
    ]
  },
  { path: '/:id/create', component: createOrder }

]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {

// })

export default router
