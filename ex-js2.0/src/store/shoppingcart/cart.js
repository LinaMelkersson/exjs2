
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
        exists.quantity += quantity
        return
      }
      state.cart.push({product, quantity})
    },
    DELETE_PRODUCT_FROM_CART: (state, id) => {
      state.shoppingCart = state.shoppingCart.filter(item => item.product._id !== id)
      sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    },
    DECREMENT_QUANTITY: (state, item) => {
      item.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    },
    // INCREMENT_QUANTITY: (state, item) => {
    //   item.quantity += 1
    //   sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    // },
    INCREMENT_QUANTITY: (state, {product, quantity}) => {
      let item = state.shoppingCart.find(i => i.product._id === product._id)
      item.quantity += Number(quantity)
      sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
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
      let i = {
        ...item,
        quantity: 1
      }
      commit('INCREMENT_QUANTITY', i)
    }
  }
}