import axios from 'axios'

export default {
    state: {
        products: [],
        product: null
    },
    getters: {
        products: state => state.products,
        product: state => state.product
    },
    mutations: {
        GET_PRODUCTS: (state, products) => {
            state.products = products
        },
        GET_PRODUCT: (state, product) => {
            state.product = product
        }
    },
    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('http://localhost:9999/api/products')
            commit('GET_PRODUCTS', res.data)
        },
        getProduct: async ({commit}, _id) => {
            const res = await axios.get('http://localhost:9999/api/products/' + _id)
            commit('GET_PRODUCT', res.data)
        },
    }
  }
  