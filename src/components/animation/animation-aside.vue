<template>
  <aside class='animation-aside'>
    <div class="animation-aside-title">
      <section>
        <h1>排行</h1>
        <p @mousemove='changedata($event)'>
          <span class='on'>全部</span>
          <span>原创</span>
        </p>
      </section>
      <div class="datechage">
        <div class="thisdata">
          <span ref='spantext'>{{spantaday}}</span>
          <i></i>
        </div>
        <p ref='ptext'
           @click='toggle()'>{{ptaday}}</p>
      </div>
    </div>
    <div class="listoverhidden">
      <div class="list"
           ref='list'>
        <ul class="animation-main">
          <router-link :to="{name:'media',params:{h1:animationasidevalue.title,view:animationasidevalue.view,dmall:animationasidevalue.dmall,media:animationasidevalue.media}}"
                       tag="li"
                       v-for="(li,index) in animationasidevalue"
                       :key='index'>
            <i :class="{changecolor:index>2}">{{index+1}}</i>
            <template v-if='index<1'>
              <img :src="li.img"
                   alt="">
              <section>
                <h3>{{li.h3}}</h3>
                <p>{{li.p}}</p>
              </section>
            </template>
            <h3 v-else>{{li.h3}}</h3>
          </router-link>
        </ul>
        <ul class="animation-main">
          <router-link :to="{name:'media',params:{h1:animationsideOriginal.title,view:animationsideOriginal.view,dmall:animationsideOriginal.dmall,media:animationsideOriginal.media}}"
                       tag="li"
                       v-for="(li,index) in animationsideOriginal"
                       :key='index'>
            <i :class="{changecolor:index>2}">{{index+1}}</i>
            <template v-if='index<1'>
              <img :src="li.img"
                   alt="">
              <section>
                <h3>{{li.h3}}</h3>
                <p>{{li.p}}</p>
              </section>
            </template>
            <h3 v-else>{{li.h3}}</h3>
          </router-link>
        </ul>
      </div>
    </div>
  </aside>
</template>
<style lang="less" scoped>
.animation-aside {
  width: 260px;
  .animation-aside-title {
    position: relative;
    section {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 105px;
      h1 {
        font-size: 18px;
        font-weight: 400;
      }
      span {
        border-bottom: 1px solid transparent;
        cursor: pointer;
      }
      .on {
        position: relative;
        color: #00a1d6;
        padding-bottom: 4px;
        border-color: #00a1d6;
        &:before {
          display: block;
          content: "";
          left: 50%;
          position: absolute;
          margin-left: -3px;
          bottom: 0;
          width: 0;
          height: 0;
          border-bottom: 3px solid #00a1d6;
          border-top: 0;
          border-left: 3px dashed transparent;
          border-right: 3px dashed transparent;
        }
      }
    }
    .datechage {
      height: 22px;
      line-height: 22px;
      border: 1px solid #737374;
      border-radius: 4px;
      position: absolute;
      z-index: 5;
      right: 0;
      top: 6px;
      cursor: default;
      &:hover {
        height: 44px;
        background-color: white;
        p {
          cursor: pointer;
          display: block;
        }
      }
      .thisdata {
        padding: 0 7px;
      }
      i {
        display: inline-block;
        width: 12px;
        height: 6px;
        margin-left: 5px;
        margin-top: -1px;
        background-position: -475px -157px;
      }
      p {
        display: none;
        padding-left: 5px;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
  .listoverhidden {
    width: 100%;
    overflow: hidden;
  }
  .list {
    display: flex;
    width: 520px;
    transition: 0.4s;
  }
  .animation-main {
    padding-bottom: 15px;
    padding-top: 20px;
    position: relative;
    min-height: 278px;
    & > li {
      position: relative;
      padding-left: 25px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 11px;
      &:hover {
        h3 {
          color: #00a1d6;
        }
      }
      i {
        display: inline-block;
        background: #f25d8e;
        position: absolute;
        color: #fff;
        height: 18px;
        line-height: 18px;
        top: 0;
        left: 0;
        font-size: 12px;
        min-width: 12px;
        text-align: center;
        border-radius: 4px;
        padding: 0 3px;
        font-weight: bolder;
        font-style: normal;
      }
      .changecolor {
        background: #b8c0cc;
      }
      img {
        width: 80px;
        height: 50px;
        border-radius: 4px;
        cursor: pointer;
      }
      section {
        width: 150px;
        cursor: pointer;
      }
      h3 {
        font-weight: 400;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        cursor: pointer;
        &:first-child(1) {
          height: 36px;
        }
      }
      p {
        font-size: 12px;
        color: #99a2aa;
        height: 12px;
        line-height: 12px;
        margin-top: 3px;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'aniamtionaside',
  props: ['animationasidevalue', 'animationsideOriginal', 'animationsideweek'],
  data () {
    return {
      spantaday: '三日',
      ptaday: '一周',
      animationthree: {}
    }
  },
  mounted: function () {
    this.animationthree = this.animationasidevalue
  },
  methods: {
    // 日期切换点击事件
    changedata: function (ev) {
      let target = ev.target
      for (let index = 0; index < target.parentNode.children.length; index++) {
        target.parentNode.children[index].className = ''
      }
      if (target.nodeName === 'SPAN') {
        target.className = 'on'
        if (target.innerText === '全部') {
          this.$refs.list.style.transform = 'translateX(-260px)'
        } else {
          this.$refs.list.style.transform = 'translateX(0)'
        }
      }
    },
    // 切换
    toggle () {
      // console.log(this.animationsideOriginal)
      if (this.spantaday === '一周') {
        this.spantaday = '三日'
        this.ptaday = '一周'
        this.animationasidevalue = this.animationthree
        this.animationsideOriginal = this.animationthree
      } else {
        this.animationasidevalue = this.animationsideweek
        this.animationsideOriginal = this.animationsideweek
        this.spantaday = '一周'
        this.ptaday = '三日'
      }
    }
  }
}

</script>
