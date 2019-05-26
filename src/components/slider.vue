<template>
  <div class="maskslider">
    <ul class="slidershow"
        @mouseenter.stop="sliderstop()"
        @mouseleave.stop="slideropen()"
        ref='slidershow'>
      <router-link :to="{name:'media',params:{h1:todo.p,id:todo.mediaid}}"
                   tag='li'
                   v-for="(todo,index) in slidershow"
                   :key="index"
                   v-bind:style="{backgroundImage:'url(/static/images/'+todo.img+')'}"></router-link>
    </ul>
    <p class="masklidertext"
       :key='slidershow.p'>{{slidershow[0].p }}</p>
    <ul class="dot"
        @click="dotclick($event)"
        ref='dot'>
      <li v-for='(dot,index) in this.slidershow'
          :key='index'></li>
    </ul>
  </div>
</template>
<style lang="less">
.maskslider {
  @width: 440px;
  @index: 5;
  width: @width;
  height: 220px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  cursor: pointer;
  .slidershow {
    height: 220px;
    width: @width* @index;
    transition: 0.7s;
    li {
      float: left;
      width: @width;
      height: 100%;
    }
  }
  .masklidertext {
    position: absolute;
    bottom: 0;
    left: 5%;
    font-size: 16px;
    color: white;
  }
  .dot {
    position: absolute;
    bottom: 0;
    right: 5%;
    display: flex;
    li {
      @dot: 18px;
      width: @dot;
      height: @dot;
      background-image: url(../assets/images/icons.png);
      background-position: -855px -790px;
      cursor: pointer;
      &:hover {
        background-position: -920px -790px;
      }
    }
  }
}
</style>

<script >
import { mapGetters } from 'vuex'
export default {
  name: 'slider',
  mounted: function () {
    this.$refs.dot.children[0].style.backgroundPosition = '-855px -727px'
    for (let i = 0; i < this.$refs.dot.children.length; i++) {
      this.$refs.dot.children[i].index = i
      this.arr[i] = this.slidershow[i].p
    }
  },
  created () {
    // 初始设置
    this.slidershow = this.$store.state.slidershow
    this.i = 0
    this.dot = 0
    this.k = 0
    this.arr = []
    this.time = setInterval(this.slider, 2000)
  },
  methods: {
    // 轮播图
    slider () {
      this.$refs.dot.children[this.dot].removeAttribute('style')
      this.i++
      if (this.i > this.$refs.slidershow.children.length - 1) {
        this.i = 0
      }
      this.dot = this.i
      this.$refs.slidershow.children[1].innerText = this.arr[this.dot]
      this.$refs.dot.children[this.i].style.backgroundPosition = '-855px -727px'
      this.$refs.slidershow.style.transform = 'translateX(' + this.i * -440 + 'px)'
    },
    // dot点击事件
    dotclick (ev) {
      let event = window.event || ev
      let target = event.target
      if (target.nodeName === 'LI') {
        this.$refs.dot.children[this.dot].removeAttribute('style')
        this.dot = target.index
        this.i = target.index
        this.$refs.slidershow.children[1].innerText = this.arr[this.dot]
        this.$refs.dot.children[this.i].style.backgroundPosition = '-855px -727px'
        this.$refs.slidershow.style.transform = 'translateX(' + this.i * -440 + 'px)'
      }
    },
    // 轮播关闭
    sliderstop () {
      clearInterval(this.time)
    },
    // 轮播开启
    slideropen () {
      this.time = setInterval(this.slider, 2000)
    }
  },
  destroyed () {
    clearInterval(this.time)
  },
  computed: {
    ...mapGetters([
      'mediaid'
    ])
  }
}
</script>
