export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => {
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    cartPriceCount: state => {
      let items = 0

      state.cart.forEach(item => {
        items += item.quantity * item.product.price
      })
      return items
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        exists.quantity += Number(quantity)
        return
      }
      state.cart.push({product, quantity})
    },
    ADD_ORDER: (state, {order}) => {
      state.cart.push({order})
    },
    DELETE_PRODUCT_FROM_CART: (state, id) => {
      state.cart = state.cart.filter(item => item.product._id !== id)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DECREMENT_QUANTITY: (state, item) => {
      item.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    INCREMENT_QUANTITY: (state, item) => {
      item.quantity += 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    addProductToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    },
    deleteProductFromCart: ({commit}, id) => {
      commit('DELETE_PRODUCT_FROM_CART', id)
    },
    decrementQuantity: ({commit}, item) => {
      if(item.quantity <= 1) {
        commit('DELETE_PRODUCT_FROM_CART', item.product._id)
        return
      }
      commit('DECREMENT_QUANTITY', item)
    },
    incrementQuantity: ({commit}, item) => {
      commit('INCREMENT_QUANTITY', item)
    },
    addOrder: ({commit}, {order}) => {
      commit('ADD_ORDER', {order})
    }
    // addOrder: (state, shoppingCart) => {
    //   let order = []
    //   order.push(state,shoppingCart)
    //   return order
    // }
  }
}
