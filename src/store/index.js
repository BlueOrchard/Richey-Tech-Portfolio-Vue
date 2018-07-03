import Vue from 'vue'
import Vuex from 'vuex'

import homeModule from './home-store'
import loaderModule from './loader'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home: homeModule,
        loader: loaderModule
    }
})