import axios from 'axios'

export default {
    state: {
        orders: [],
        order: null
    },
    getters: {
        orders: state => state.orders,
        order: state => state.order
    },
    mutations: {
        GET_ORDERS: (state, orders) => {
            state.orders = orders
            console.log(state.orders);
        },
        GET_ORDER: (state, order) => {
            state.order = order
        },
        // SAVE_ORDER: (state, shoppingCart) => {
        //     state.order = shoppingCart
        // }
    },
    actions: {
        getOrders: async ({commit}) => {
            const res = await axios.get('http://localhost:9999/api/orders')
            commit('GET_ORDERS', res.data)
        },
        getOrder: async ({commit}, _id) => {
            const res = await axios.get('http://localhost:9999/api/orders/' + _id)
            commit('GET_ORDER', res.data)
        },

        saveOrder: async (context, _order) => {
            await axios.post('/orders/save', _order)
          console.log(_order)
          },
    }
  }
  