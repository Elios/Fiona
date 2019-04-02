<template>
    <div class="container">
        <VideoIntro v-for="(v,i) of items" :i-src="v.iSrc" :url="v.url" :desc="v.desc" :key="i"></VideoIntro>
    </div>
</template>

<script>
import VideoIntro from './components/VideoIntro'
export default {
  name: 'DisplayArea',
  components: {VideoIntro},
  data () {
    return {
      items: [
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        },
        {
          iSrc: 'upload/image/navBkg.jpg',
          url: '#',
          desc: '视频简介'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .container{
        margin-top: 15px;
        margin-bottom: 15px;
        display: grid;
        grid-template-columns:repeat(4,130px);
        grid-template-rows:repeat(3,110px);
        -webkit-column-gap: 20px;
        -moz-column-gap: 20px;
        column-gap: 20px;
        row-gap: 10px;
    }
</style>
