<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    let that = this
    window.addEventListener('unload', function () {
      // 添加页面刷新事件监听，防止重新加载页面后登录状态消失
      sessionStorage.setItem('state.user', JSON.stringify(that.$store.state.user))
    })
  }
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
