<!--
 * @Author: vickiWu
 * @Date: 2022-03-23 14:24:42
 * @LastEditTime: 2022-03-23 18:08:46
 * @LastEditors: vickiWu
 * @Description: 
 * @FilePath: \wwy-map\examples\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./logo.png" />
    <h1>Welcome to My Vue.js UI By WebPack!</h1>
    <JSX></JSX>
    <me-loading loading-text="页面加载中。。。。"></me-loading>
  </div>
</template>

<script>
import JSX from './JSX.vue'
export default {
  name: 'App',
  components: { JSX },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
