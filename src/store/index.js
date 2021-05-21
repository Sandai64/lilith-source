import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catLikes: []
  },
  mutations: {
    addLike (state, catObject) {
      state.catLikes.push(catObject)
    }
  },
  getters: {
    getLikes: state => {
      return state.catLikes
    }
  }
})
