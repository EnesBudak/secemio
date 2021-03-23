import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })




const  app = createApp(App).use(router).mount('#app')
