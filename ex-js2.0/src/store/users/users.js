import axios from '@/axios/axios'
import router from 'vue-router'
import jwt from 'jsonwebtoken'

export default {
  state: {
    userToken: null,
    loggedIn: false,
    loggedInUserId: null
  },
  getters: {
    loggedIn: state => state.loggedIn,
    loggedInUserId: state => state.loggedInUserId
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.userToken = null
        state.loggedIn = false
      }
    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')

        const user = jwt.decode(token)
        if(token) {
          state.loggedInUserId = user.id
          state.userToken = token
          state.loggedIn = true
        } else {
          state.userToken = null
          state.loggedIn = false
        }
      }
      catch(err) {
        console.log(err)
      }
    }
  },
  actions: {
    register: async (context, _user) => {
      await axios.post('/users/register', _user)
    console.log(_user)
    },
    login: ({commit}, payload) => {
      axios.post('/users/login', payload.user)
        .then(res => {
          if(res.status === 200) {
            
            localStorage.setItem('token', res.data.token)
            commit('SET_USER', res.data.token)

            if(payload.route) {
              router.push(payload.route)
            } else {
              router.push('/')
            }
          }
        })
    },
    checkUser: ({commit}) => {
      commit('CHECK_USER')
    },
    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')

        commit('SET_USER', null)
      }
    }
  }
}