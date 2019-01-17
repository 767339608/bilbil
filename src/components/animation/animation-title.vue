<template>
  <div class="animation-title">
    <div class="animation-title-left">
      <figure><i></i>
        <h1>动画</h1>
      </figure>
      <div class="animation-table"
           @click='animationTable($event)'>
        <span class='on'>最新动态</span>
        <span>最新投稿</span>
      </div>
    </div>
    <div class="animation-title-right">
      <div class="refresh"
           @click='clickfresh()'
           ref='refresh'>
        <i></i>
        <span>{{newvideo}}</span>
        <span>条新动态</span>
      </div>
      <a href=""
         class="more">更多<i></i></a>
    </div>
  </div>
</template>
<style lang="less">
.flex {
  display: flex;
  justify-content: space-between;
}
.animation-title {
  padding-right: 20px;
  padding-bottom: 15px;
  .flex();
  .animation-title-left {
    .flex();
    width: 205px;
    align-items: center;
    figure {
      .flex();
    }
    i {
      display: inline-block;
      background-position: -141px -908px;
      margin-top: -10px;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
    span {
      position: relative;
      height: 20px;
      cursor: pointer;
      padding: 1px 0 2px;
      border-bottom: 1px solid transparent;
      transition: 0.2s;
      display: inline-block;
      line-height: 20px;
      transition-property: border, color;
      &:hover {
        color: #00a1d6;
      }
    }
    .on {
      color: #00a1d6;
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
  .animation-title-right {
    .flex();
    i {
      vertical-align: middle;
      width: 12px;
      height: 13px;
      display: inline-block;
      background-position: -475px -89px;
      transition: 0.2s;
    }
    .refresh {
      border-radius: 4px;
      border: 1px solid #ccd0d7;
      height: 22px;
      padding: 0 10px;
      line-height: 22px;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        i {
          transform: rotate(180deg);
        }
      }
    }
    a {
      display: inline-block;
      width: 52px;
      height: 22px;
      line-height: 22px;
      background-color: #fff;
      border: 1px solid #ccc0d7;
      color: #555;
      border-radius: 4px;
      text-align: center;
      transition: 0.2s;
      &:hover {
        background-color: #bbb;
        i {
          margin-left: 7px;
        }
      }
      i {
        width: 6px;
        height: 12px;
        margin: -2px 0 0;
        background-position: -478px -218px;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'animationtitle',
  props: ['newvideo'],
  methods: {
    // 动画模块table切换
    animationTable: function (ev) {
      let target = ev.target
      let animationchild = target.parentNode.children
      for (let index = 0; index < animationchild.length; index++) {
        animationchild[index].className = ''
      }
      console.log(target.nodeName)
      if (target.nodeName === 'SPAN') {
        target.className = 'on'
      }
    },
    // 动画模块新动态点击
    clickfresh: function () {
      this.$refs.refresh.style.opacity = '0'
    }
  }
}
</script>
