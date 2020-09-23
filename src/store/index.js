import Vue from "vue"
import Vuex from "vuex"
import {axiosBase} from '../api/axios-base'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        backendUrl: "http://127.0.0.1:8000",
        // auth_token: localStorage.getItem('auth_token') || null,
    },
    mutations: {
        // updateLocalStorage(state, {auth_token}) {
        //     localStorage.setItem('auth_token', auth_token)
        //     // state.auth_token = auth_token
        // },
    },
    actions: {
        loginUser(context, credentials) {
            return new Promise((resolve, reject) => {
                axiosBase.post('/auth/token/login', {
                    email: credentials.email,
                    password: credentials.password
                })
                    .then(response => {
                        console.log(response.data)
                        localStorage.setItem('auth_token', response.data.auth_token)
                        // context.commit('updateLocalStorage', {
                        //     auth_token: response.auth_token,
                        // })
                        resolve()

                    })
                    .catch(err => {
                        reject(err)
                    })

            })

        }
    },
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        },

    }
})

export default store