import Vue from 'vue'
import Vuex from 'vuex'
import Products from './products/products'
import User from './users/users'
import Cart from './shoppingcart/cart'
import Order from './shoppingcart/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products,
    User,
    Cart,
    Order
  }
})
