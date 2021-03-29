import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Reg from '../views/Reg.vue'
import UnikProduct from '../views/UnikProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/Reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/UnikProduct/:id',
    name: 'UnikProduct',
    component: UnikProduct,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
