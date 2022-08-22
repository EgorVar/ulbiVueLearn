import {createStore} from 'vuex'


export default createStore({
  state: {  // Сами данные
    likes: 1,
    name: 'CMHell'
  },
  getters: { // Computed function
    doubleLikes(state) {
      return state.likes * 2
    }
  },
  mutations: { // Methods
    incrementLikes(state) {
      state.likes += 1
    },
    decrementLikes(state) {
      state.likes -= 1
    }
  },
  actions: { // как более большие функций завязанные на вышеперечисленных данных

  },
  modules: {

  }
})
