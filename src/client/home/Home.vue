<template>
    <div>
        <Layout>
            <Header class="layout-header">
                <TopNav @login="login"></TopNav>
                <LoginNLogon ref="login"></LoginNLogon>
            </Header>
            <Layout class="layout-content">
                <Content>
                    <Body></Body>
                </Content>
            </Layout>
            <Footer class="layout-footer">
                <Bottom></Bottom>
            </Footer>
        </Layout>
    </div>
</template>

<script>
import TopNav from '../components/navigator/TopNav'
import LoginNLogon from '../components/modal/LoginNLogon'
import Bottom from '../components/footer/Bottom'
import Body from './body/Body'

export default {
  name: 'Home',
  components: {Body, Bottom, LoginNLogon, TopNav},
  methods: {
    login () {
      this.$refs['login'].showLogin = true
    }
  }
}
</script>

<style scoped>
    .layout-header {
        position: fixed;
        width: 100%;
        background-color: white;
        height: 40px;
        line-height: 40px;
    }

    .layout-content {
        margin-top: 5%;
        margin-bottom: 2%;
        background-color: darksalmon;
    }

    .layout-footer {
        background: #decafb;
        height: 5px;
        line-height: 5px;
    }
</style>
