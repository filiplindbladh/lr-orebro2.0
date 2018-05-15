import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import * as apiurl from '@/store/config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment () {
      this.state.count++
    },
    decrement () {
      this.state.count--
    }
  },
  actions: {
  }
})
