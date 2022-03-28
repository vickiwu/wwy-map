/**
 * @Author: vickiWu
 * @Date: 2022-03-23 14:25:44
 * @LastEditTime: 2022-03-24 10:09:34
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \wwy-map\examples\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MeUI from '../lib/wwy-map.common'
console.log('%c 🍋 MeUI: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', MeUI)
import hljs from 'highlight.js'
import demoBlock from './components/demo-block'
import 'highlight.js/styles/stackoverflow-light.css'

Vue.config.productionTip = false
Vue.use(MeUI)
Vue.component('demo-block', demoBlock)

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'me-ui'
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
