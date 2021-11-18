import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.prototype.$store = store

// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
const app = new Vue({
    store,
    ...App
})
app.$mount()
