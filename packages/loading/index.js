/**
 * @Author: vickiWu
 * @Date: 2022-03-23 18:02:41
 * @LastEditTime: 2022-03-23 18:04:37
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \wwy-map\packages\loading\index.js
 */
import Loading from './src/main.vue'
Loading.install = (Vue, options) => {
  console.log('%c 🥘 options: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', options)
  Vue.component(Loading.name, Loading)
}
export default Loading
