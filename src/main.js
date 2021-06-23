import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { Collapse, CollapseItem, Cell } from 'vant'

Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cell)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
