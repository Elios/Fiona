<template>
    <Menu mode="horizontal" :theme="theme" active-name="home" class="topNav">
        <MenuItem name="icon">
            <img src="../../assets/images/icon.jpg" width="36px" height="36px">
        </MenuItem>
        <MenuItem name="home">
            主页
        </MenuItem>
        <Submenu name="category">
            <template slot="title">
                类别
            </template>
            <MenuItem name="category-1">
                动漫
            </MenuItem>
            <MenuItem name="category-2">
                游戏
            </MenuItem>
            <MenuItem name="category-3">
                影视
            </MenuItem>
        </Submenu>
        <MenuItem name="feedback">
            问题反馈
        </MenuItem>
        <template v-if="!uname">
            <MenuItem name="loginNLogon" @click.native="toLogin">
                登录&注册
            </MenuItem>
        </template>
        <template v-else>
            <Submenu name="user">
                <template slot="title">
                    欢迎 {{uname}}
                </template>
                <MenuItem name="logout" @click.native="logout">
                    登出
                </MenuItem>
            </Submenu>
        </template>
    </Menu>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'TopNav',
  data () {
    return {
      isLogin: false,
      theme: 'light'
    }
  },
  computed: mapState({
    uname: (state) => state.user.uname
  }),
  methods: {
    toLogin () {
      this.$emit('login')
    },
    logout () {
      let that = this
      this.$axios({
        method: 'post',
        url: '/api/logout'
      }).then(function (res) {
        that.isLogin = false
        that.$store.commit('user/SET_UNAME', undefined)
        sessionStorage.removeItem('uname')
        that.$Message.info('登出成功')
      }).catch(function (e) {
        that.$Message.error('登出失败，请稍后再试或反馈给我们。')
      })
    }
  }
}
</script>

<style scoped>
    .topNav{
        background-color: #decafb;
        height: 40px;
        line-height: 40px;
        position: absolute;
        left: 0;
        width: 100%;
        border: 1px solid #abcdef;
        border-radius: 5px;

    }
</style>
