import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
//        backendUrl: "http://127.0.0.1:1337/api/v1"
        backendUrl: "http://5.63.157.5/api/v1"
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        }
    }
})

export default store