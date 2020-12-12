import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import images from './modules/images'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    images,
  },

})

//ID
//Secret 95ab435967ed030b2df0ef3d286c0a2f33a3adc5