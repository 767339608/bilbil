<template>
  <div class="maskslider">
    <ul class="slidershow"
        @mouseenter="sliderstop()"
        @mouseleave="slideropen()">
      <router-link :to="{name:'media',params:{h1:slidershow.title,view:slidershow.view,dmall:slidershow.dmall,media:slidershow.media}}"
                   tag='li'
                   v-for="(todo,index) in slidershow"
                   :key="index"
                   v-bind:style="{backgroundImage:'url(/static/images/'+todo.img+')'}"></router-link>
    </ul>
    <p class="masklidertext"
       :key='slidershow.p'>{{slidershow[0].p }}</p>
    <ul class="dot"
        @click="dotclick($event)">
      <li v-for='(dot,index) in slidershow'
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
export default {
  name: 'slider',
  props: ['slidershow'],
  mounted: function () {
    this.dom('dot').children[0].style.backgroundPosition = '-855px -727px'
    for (let i = 0; i < this.dom('dot').children.length; i++) {
      this.dom('dot').children[i].index = i
      this.arr[i] = this._props.slidershow[i].p
    }
  },
  created: function () {
    this.main()
  },
  methods: {
    // dom封装
    dom: function (value) {
      return this.$el.getElementsByClassName(value)[0]
    },
    // 初始设置
    main: function () {
      this.i = 0
      this.dot = 0
      this.k = 0
      this.arr = []
      this.time = setInterval(this.slider, 2000)
    },
    // 轮播图
    slider: function () {
      this.dom('dot').children[this.dot].removeAttribute('style')
      this.i++
      if (this.i > this.dom('slidershow').children.length - 1) {
        this.i = 0
      }
      this.dot = this.i
      this.dom('masklidertext').innerText = this.arr[this.dot]
      this.dom('dot').children[this.i].style.backgroundPosition = '-855px -727px'
      this.dom('slidershow').style.transform = 'translateX(' + this.i * -440 + 'px)'
    },
    // dot点击事件
    dotclick: function (ev) {
      let event = window.event || ev
      let target = event.target || event.serElement
      console.log(event.target.index)
      if (target.nodeName === 'LI') {
        this.dom('dot').children[this.dot].removeAttribute('style')
        this.dot = target.index
        this.i = target.index
        console.log(this.dot)
        this.dom('masklidertext').innerText = this.arr[this.dot]
        this.dom('dot').children[this.dot].style.backgroundPosition = '-855px -727px'
        this.dom('slidershow').style.transform = 'translateX(' + this.dot * -440 + 'px)'
      }
    },
    // 轮播关闭
    sliderstop: function () {
      clearInterval(this.time)
    },
    // 轮播开启
    slideropen: function () {
      this.time = setInterval(this.slider, 2000)
    }
  }
}
</script>
