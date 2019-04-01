<template>
    <div>
        <div>
            <img :src="iSrc" @click="imgClick(url)" width="130px" height="80px" class="video-image">
        </div>
        <div>
            <a :href="url">
                {{desc}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VideoIntro',
  props: {
    iSrc: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    },
    desc: {
      required: true,
      type: String
    }
  },
  methods: {
    imgClick (url) {

    }
  }
}
</script>

<style scoped>
    .video-image{
        border-radius: 10px;
    }
    span{
        float: left;
        margin: 10px 20px;
    }
    img:hover{
        cursor: pointer;
        border: 1px solid #6666ff;
    }
    a{
        text-decoration: none;
        color: #2a3a4a;
    }
    a:hover{
        color: #4592af;
    }
</style>
