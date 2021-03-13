import Vue from 'vue'
import App from './App'

//引入api
import { myRequest } from './util/api.js'
Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
