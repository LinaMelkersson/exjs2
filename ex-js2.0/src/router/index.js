import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Reg from '../views/Reg.vue'
import UnikProduct from '../views/UnikProduct'
import User from '../views/User'

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
    path: '/user',
    name: 'User',
    component: User,
    meta: { authorize: true }
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

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const token = localStorage.getItem('token')

  if(authorize) {

    if(!token) {
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      next()
    }

  }
  next()
})

export default router
