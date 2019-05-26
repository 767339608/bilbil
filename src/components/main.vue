<template>
  <article>
    <v-topimg></v-topimg>
    <div class="center">
      <!-- 导航栏 -->
      <ul class='main-nav'>
        <li v-for='(nav,index) in navs'
            :key='index'>{{ nav.text}}</li>
      </ul>
      <div class="main-recommend">
        <!-- 轮播图 -->
        <v-slider></v-slider>
        <v-asidetable></v-asidetable>
      </div>
      <!-- 推广栏 -->
      <v-promate></v-promate>
      <div class="mask">
        <v-video v-for="(video , index) in videos"
                 :key="index"
                 :videovalue="video"
                 :id='video.mediaid'>
          <p title="video.title">{{video.title}}</p>
        </v-video>
        <figure class='mask-img'><img src="static/images/43bc9b1e5c6095ece0f6b6219145252ee9fc6c9e.jpg"
               alt=""
               width="260px"
               height="150px"></figure>
      </div>
      <!-- 动画栏 -->
      <div class="animation">
        <v-animationvideo></v-animationvideo>
        <v-animationaside></v-animationaside>
      </div>
      <!-- 番剧 -->
      <div class="Folk_Opera">
        <VFolkOperaleft />
      </div>
    </div>
  </article>
</template>
<script>
import topimg from '@/components/topimg'
import Video from '@/components/video'
import Slider from '@/components/slider'
import asidetable from '@/components/asidetable'
import promate from '@/components/Promote_the_bar'
import { mapState } from 'vuex'
import animationvideo from '@/components/animation/animationvideo'
import VAnimationaside from '@/components/animation/animation-aside'
import VFolkOperaleft from '@/components/Folk_Opera/FolkOperaleft'
export default {
  $el: 'article',
  name: 'mainer',
  components: {
    vTopimg: topimg,
    vSlider: Slider,
    vAsidetable: asidetable,
    vPromate: promate,
    vVideo: Video,
    VAnimationvideo: animationvideo,
    VAnimationaside,
    VFolkOperaleft
  },
  data () {
    return {
      navs: [
        { text: '首页' },
        { text: '动画' },
        { text: '番剧' },
        { text: '国创' },
        { text: '音乐' },
        { text: '舞蹈' },
        { text: '游戏' },
        { text: '科技' },
        { text: '数码' },
        { text: '生活' },
        { text: '鬼畜' },
        { text: '时尚' },
        { text: '广告' },
        { text: '娱乐' },
        { text: '影视' }
      ],
      h1: []
    }
  },
  computed: {
    ...mapState({
      videos: 'videos'
    })
  }
}
</script>
<style lang="less" scoped>
article {
  .main-recommend {
    display: flex;
    justify-content: space-between;
  }
  .mask {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .animation {
    .flex();
    .animation-left {
      width: 900px;
    }
  }
}
@media screen and(min-width:1400px) {
  .center {
    width: 1170px;
    margin: auto;
  }
  .main-nav {
    width: 1160px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
  .main-recommend {
    width: 1160px;
  }
}
</style>
