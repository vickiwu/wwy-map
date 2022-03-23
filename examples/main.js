/**
 * @Author: vickiWu
 * @Date: 2022-03-23 14:25:44
 * @LastEditTime: 2022-03-23 18:07:37
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \wwy-map\examples\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import MeUI from '../src/index'
Vue.use(MeUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
