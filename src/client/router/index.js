import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/Home'

Vue.use(Router)

export default new Router({
  // 使用history模式，这种模式充分利用了history.pushState API 来完成URL跳转而无须重新加载页面
  // 若不使用history则地址会为http://localhost:4000/#/
  // 使用后为http://localhost:4000
  // mode值可为Hash、History、Abstract
  // hash: 使用URL hash值来作为路由。支持所有浏览器
  // history: 依赖HTML5 History API和服务器配置
  // abstract: 支持所有js运行环境。若发现没有浏览器的API，路由会自动强制进入这个模式
  mode: 'history',
  // base为应用的基路径。当在HTML5 history模式下使用base后，所有的to属性都不需要写基路径了
  base: __dirname,
  routes: [
    {
      path: '/',
      // 不直接引用路由定义
      // name用来命名路由,使用路由名称取代URL的直接引用
      name: 'Home',
      component: Home
      // linkActiveClass: "active" <router-link>对应路径匹配成功时会自动设置class属性值为 .router-link-active,通过
      // linkActiveClass将激活状态样式类命名为active
    }
  ]
})
