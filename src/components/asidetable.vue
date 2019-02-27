<template>
  <aside class='aside-recommend'>
    <ul class="img">
      <li v-for='(url,index) in parameter()'
          :title='url.title'
          :key='index'>
        {{url.id}}
        <router-link :to="{name:'media',params:{h1:url.title,view:mediaall[`0001`].view,dmall:mediaall['0001'].dmall,media:mediaall['0001'].media}}"
                     :data-id='url.id'>
          <img :src='url.img'
               alt="">
          <div class="imgshadow"><span class='title'>{{url.title}}</span></div>
        </router-link>
      </li>
    </ul>
    <span class="rec-btn prev"
          @click='leftchange()'>{{left}}</span>
    <span class="rec-btn next"
          @click="rightchange()">{{right}}</span>
  </aside>
</template>
<style lang="less">
.aside-recommend {
  width: 720px;
  position: relative;
  &:hover {
    .rec-btn {
      opacity: 1;
    }
  }
  & > ul {
    & > li {
      position: relative;
      display: inline-block;
      margin: 0 0 20px 20px;
      cursor: pointer;
      overflow: hidden;
      @width: 160px;
      &:hover {
        .imgshadow {
          opacity: 0.7;
          width: @width;
          height: 100px;
          top: 0;
          background: #000;
          color: white;
          display: flex;
          align-items: center;
        }
      }
      .imgshadow {
        width: 150px;
        height: 20px;
        position: absolute;
        right: 0;
        padding: 0 5px;
        bottom: 0;
        overflow: hidden;
        color: white;
      }
    }
  }
  .rec-btn {
    display: inline-block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url(../assets/images/icons2.png);
    width: 20px;
    top: 50%;
    margin-top: -8px;
    cursor: pointer;
    color: #fff;
    text-align: center;
    transition: 0.3s;
    opacity: 0;
  }
  .prev {
    left: 20px;
    border-radius: 0 4px 4px 0;
    padding: 13px 5px 13px 10px;
    background-position: 6px -1211px;
  }
  .next {
    right: 0;
    border-radius: 4px 0 0 4px;
    padding: 13px 10px 13px 5px;
    background-position: 25px -1262px;
  }
}
</style>
<script>
export default {
  name: 'asidetable',
  props: ['imgurl', 'weekimgurl', 'yestimgurl', 'mediaall'],
  data () {
    return {
      imgstate: 0,
      right: '一周',
      left: '昨日'
    }
  },
  watch: {
    id: function () {
      console.log(this.id)
    }
  },
  methods: {
    // 切换
    parameter () {
      if (this.imgstate === 0) {
        return this.imgurl
      } else if (this.imgstate === 1) {
        return this.weekimgurl
      } else if (this.imgstate === 2) {
        return this.yestimgurl
      }
    },
    // 右侧
    rightchange () {
      if (this.right === '一周') {
        this.right = '昨日'
        this.left = '三日'
        this.imgstate = 1
      } else if (this.right === '昨日') {
        this.right = '三日'
        this.left = '一周'
        this.imgstate = 2
      } else if (this.right === '三日') {
        this.right = '一周'
        this.left = '昨日'
        this.imgstate = 0
      }
    },
    // 左侧
    leftchange () {
      if (this.left === '昨日') {
        this.right = '三日'
        this.left = '一周'
        this.imgstate = 2
      } else if (this.right === '一周') {
        this.right = '昨日'
        this.left = '三日'
        this.imgstate = 1
      } else if (this.right === '三日') {
        this.right = '一周'
        this.left = '昨日'
        this.imgstate = 0
      }
    }
  }
}
</script>
