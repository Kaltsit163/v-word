import Vue from 'vue'
import App from './App.vue'
import {
  max,
  filterEmoji
} from './lib/word'

Vue.filter('max', max)
Vue.filter('filterEmoji', filterEmoji)

new Vue({
  el: '#app',
  render: h => h(App)
})
