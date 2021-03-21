import Vue from 'vue'
import App from './App'

//引入api
import { myRequest } from './util/api.js'
Vue.prototype.$myRequest = myRequest

// uni异步化
import uniAsync from './util/uni-async.js'
// 设置到prototype
Vue.prototype.$uniAsync = uniAsync

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
