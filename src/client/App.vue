<template>
    <div id="app">
      <!--渲染路径匹配到的视图组件，可内嵌自己的<router-view>，根据嵌套路径渲染嵌套组件-->
        <router-view/>
      <!--<router-link :to="{name:'name'}"> 支持用户在具有路由功能的应用中(点击)导航.默认渲染成带有正确链接的a标签.
      tag属性可生成其他标签. active-class设置激活状态. exact精确匹配-->
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
