<template>
  <div class="back-video"
       @mousemove="backVideo($event)"
       @mouseenter="seenterbarrgage($event)"
       @mouseleave="leavebarrgage($event)">
    <div class="mask-shadow"></div>
    <div class="bar"
         style="display:none;">
      <div class="progress"></div>
    </div>
    <div class="danmu-module"
         style="display:none;">
      <p class="dm"
         v-for="(p , index) in videovalue.ps"
         :key='index'>{{p.text}}</p>
      <time>{{videovalue.videotime}}</time>
    </div>
    <p class="mask-title"
       title="video.title">{{videovalue.title}}</p>
  </div>
</template>
<style lang="less" scoped>
.back-video {
  width: 160px;
  height: 100px;
  border-radius: 4px;
  background-color: red;
  margin: 0 20px 20px 0;
  position: relative;
  float: left;
  cursor: pointer;
  &:hover {
    .mask-shadow {
      opacity: 0.5;
    }
  }
  .danmu-module {
    width: 100%;
    height: 100%;
    position: relative;
    top: -3px;
    overflow: hidden;
  }
  .mask-title {
    position: absolute;
    width: 100%;
    bottom: -48px;
    height: 34px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }
  .mask-shadow {
    height: 100px;
    width: 160px;
    border-radius: 4px;
    background-color: #6d757a;
    opacity: 0;
    position: absolute;
  }
  .bar {
    width: 140px;
    height: 3px;
    margin: auto;
    background-color: #000;
    .progress {
      width: 1px;
      height: 3px;
      background: grey;
      float: left;
    }
  }
  time {
    position: absolute;
    left: 6px;
    bottom: 6px;
    color: white;
  }
  .dm {
    color: #fff;
    left: 100%;
    position: absolute;
    white-space: pre;
    top: 8px;
  }
  .row2 {
    top: 25px;
  }
}
</style>
<script>
export default {
  name: 'Video',
  props: ['videovalue'],
  created: function () {
  },
  mounted: function () {
    this.k = 0
  },
  methods: {
    // 进度条事件
    backVideo: function (ev) {
      let current = ev.currentTarget || ev.srcElement
      let progress = ev.clientX - current.offsetLeft
      current.getElementsByClassName('progress')[0].style.width = progress + 'px'
      if (Number(current.getElementsByClassName('progress')[0].offsetWidth) > 140) {
        current.getElementsByClassName('progress')[0].style.width = 140 + 'px'
      }
    },
    // 弹幕大小判断事件
    barragejudge: function (string) {
      let num = 0
      for (let index = 0; index < string.length; index++) {
        if (string.charAt(index).match(/[\u4e00-\u9fa5]/)) {
          num++
        }
      }
      num += string.length
      return num
    },
    // 弹幕事件
    addbarrage: function (ev) {
      let toElement = ev.toElement
      console.log(ev)
      var ba = toElement.children[2]
      // console.log(ba.children[2].innerText)
      let num = this.barragejudge(ba.children[this.k].innerText) * -9
      ba.children[this.k].style.left = num + 'px'
      ba.children[this.k].style.transition = 'left 5s linear'
      ++this.k
      if (this.k > ba.children.length - 1) {
        clearInterval(this.barragetime)
        for (let index = 0; index < ba.children.length; index++) {
          ba.children[index].removeAttribute('style')
        }
        this.k = 0
        this.barragetime = setInterval(this.addbarrage, 2000, ev)
      }
    },
    // 移入生成弹幕
    seenterbarrgage: function (ev) {
      // 定时增加1
      let target = ev.target
      let dmnode = target.children[2].children
      for (let dm = 0; dm < dmnode.length; dm++) {
        if (dm % 2 === 0 && dm.className === 'dm row2') {
          dmnode[dm].className += ' row2'
        }
      }
      target.getElementsByClassName('bar')[0].style.display = 'block'
      target.getElementsByClassName('danmu-module')[0].style.display = 'block'
      this.barragetime = setInterval(this.addbarrage, 2000, ev)
    },
    // 移出停止弹幕
    leavebarrgage: function (ev) {
      clearInterval(this.barragetime)
      let target = ev.target
      target.getElementsByClassName('danmu-module')[0].style.display = 'none'
      target.getElementsByClassName('bar')[0].style.display = 'none'
    }
  }
}
</script>
