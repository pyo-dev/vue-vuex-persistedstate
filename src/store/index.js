import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import scholl from '@/store/modules/scholl.js'
import brother1 from '@/store/modules/brother-1.js'
import brother2 from '@/store/modules/brother-2.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  modules: {
    scholl: scholl,
    brother1: brother1,
    brother2: brother2,
  },
  plugins: [ 
    createPersistedState({
      storage: window.sessionStorage,
      paths: [
        'scholl',
        'brother2',
      ],
    }), 
  ],
})
