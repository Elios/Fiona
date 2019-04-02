<template>
    <Layout>
        <Layout class="category">
            <Header>Anime</Header>
            <Content class="layout-content">
                <DisplayArea></DisplayArea>
            </Content>
        </Layout>
        <Layout class="category">
            <Header>Game</Header>
            <Content class="layout-content">
                <DisplayArea></DisplayArea>
            </Content>
        </Layout>
        <Layout class="category">
            <Header>Film</Header>
            <Content class="layout-content">
                <DisplayArea></DisplayArea>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
import DisplayArea from './components/DisplayArea'
export default {
  name: 'VideoDisplay',
  components: {DisplayArea}
}
</script>

<style scoped>
    .category{
        width: 80%;
        margin-left: 10%;
    }
    .layout-content{
        background-color: #bbbbbb;
    }
</style>
