<template>
  <div class="center">
    <div class="left">
      <!-- 播放 -->
      <div class="video-info">
        <h1 class='video-title'
            :title='this.$route.params.h1'>{{this.$route.params.h1}}</h1>
        <div class="video-data"></div>
        <div class="video-data">
          <span class='view'
                :title="'总播放数'+this.$route.params.view">{{keeptwo(this.$route.params.view)+'播放'}}&nbsp;&nbsp;</span>
          <span class='dm'
                :title="'历史累计弹幕'+this.$route.params.dmall">{{keeptwo(this.$route.params.dmall)+'弹幕'}}</span>
          <span class='copyright'>未经作者授权，禁止转载
          </span>
        </div>
      </div>
      <!-- 视频 -->
      <div class="play">
        <div class="video-warp">
          <div class="video-top"></div>
          <div class="video-state">
            <img src="static/images/start.png"
                 alt=""
                 @click="start($event)">
          </div>
          <div class="video">
            <video :src="this.$route.params.media"
                   preload=auto
                   id='media'
                   @click='pasued($event)'></video>
          </div>
          <div class="video-control">
            <div class="video-control-top">
              <div class="video-control-progress"
                   @click='progressblur($event)'
                   @mousemove="onmoveframes($event)"
                   @mouseout="onoutframes()">
                <div class="video-control-progress-grey"></div>
                <div class="video-control-progress-blue"></div>
              </div>
              <div class="video-control-images"
                   ref='images'>
                <span>{{framestext}}</span>
              </div>
            </div>
            <div class="video-control-bottom">
              <div class="video-control-state">
                <img src="static/images/start.png"
                     alt=""
                     @click='start($event)'
                     v-if="chagestate">
                <img src="static/images/paused.png"
                     alt=""
                     @click='pasued($event)'
                     v-else>
              </div>
              <div class="video-control-time">{{currenttime}}/{{duration}}</div>
              <div class="video-unfined"></div>
              <div class="video-control-volume"
                   @click='displayvolume'
                   title="音量">
                <img src="static/images/volume.png"
                     alt="">
                <div class="video-control-volume-progress"
                     ref="progress">
                  <span>{{progresstext}}</span>
                  <div class="video-control-volume-blur"
                       @mousemove="volumechage($event)"
                       ref="volume">
                    <div class="video-control-volume-white"
                         ref='white'>
                      <div class="video-control-volume-blue"
                           ref='blue'></div>
                    </div>
                    <div class="video-control-volume-ball"></div>
                  </div>
                </div>
              </div>
              <div class="video-control-maxwidth"
                   @click="maxwidth()"
                   title='宽屏'>
                <img src="static/images/maxwidth.png"
                     alt="">
              </div>
              <div class="video-control-esc"
                   @click="esc()"
                   title='全屏'>
                <img src="static/images/esc.png"
                     alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="video-warp-dm">
          <div class="video-dm">
            <input type="text"
                   placeholder="发个弹幕见证当下"
                   class='video-dm-input'
                   @keyup.enter="createdm"
                   ref='dminput'>
            <div class="video-dm-send"
                 @click="createdm">发送</div>
          </div>
        </div>
        <div class="dmtext"
             ref='dmtext'>
          <span v-for="(dm,i) in dmtexts"
                :key="i"
                :title=i>{{dmtextchange(dm,i)}}</span>
        </div>
        <div class="getlike"
             @mouseenter="imgchage($event)"
             @mouseleave="imgreset($event)"
             @click='addtext()'><img src="static/images/head.png"
               alt=""><span>{{licktext}}</span></div>
      </div>
    </div>
    <!-- 其他功能 -->
    <div class="right"></div>
  </div>
</template>
<style lang="less" scoped>
.center {
  width: 988px;
  padding: 0;
  max-width: 1660px;
  min-width: 988px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
.video-title {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.video-data {
  margin: 10px 0 0;
  font-size: 12px;
  height: 16px;
  color: #999;
  .copyright {
    margin-left: 20px;
    display: inline-block;
    font-size: 12px;
    line-height: 18px;
  }
}
.play {
  width: 638px;
  position: relative;
  overflow: hidden;
}
.maxwidth {
  position: static !important ;
  width: 100% !important ;
  height: 100% !important ;
}
.getlike {
  display: inline-block;
  &:hover {
    color: #00a1d6;
    cursor: pointer;
  }
  img {
    width: 30px;
    vertical-align: middle;
  }
}
.video-warp {
  position: relative;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 0;
  z-index: auto;
  overflow: hidden;
  background-color: #000;
  user-select: none;
  &:hover {
    .video-control {
      height: 40px;
    }
    .video-control-progress {
      width: 95%;
      top: 0;
    }
  }
}
.video-state {
  position: absolute;
  height: 45px;
  width: 45px;
  right: 4%;
  bottom: 12%;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
.video {
  margin: auto;
}
video {
  width: 100%;
  display: block;
  max-width: 100%;
  cursor: pointer;
}
.video-control {
  width: 100%;
  height: 40px;
  .video-control-progress {
    position: relative;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
    height: 2.5px;
    margin-top: 5px;
    top: 22px;
    //鼠标点击后变化的
    width: 95%;
    top: 0;
    .video-control-progress-grey {
      position: absolute;
      width: 100%;
      background-color: grey;
      height: 100%;
    }
    .video-control-progress-blue {
      position: absolute;
      width: 1%;
      height: 100%;
      z-index: 2;
      background-color: #00a1d6;
    }
  }
  .video-control-bottom {
    display: flex;
    width: 94%;
    margin: 5px auto;
    align-items: center;
    justify-content: space-between;
  }
  .video-control-state,
  .video-control-volume,
  .video-control-esc {
    width: 20px;
    height: 20px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .video-control-maxwidth {
    cursor: pointer;
  }
  .video-control-time {
    color: white;
  }
  .video-unfined {
    width: 400px;
  }
}
.video-control-volume {
  position: relative;
}
.video-control-volume-progress {
  position: absolute;
  cursor: pointer;
  bottom: 41px;
  left: 2px;
  width: 32px;
  height: 100px;
  background: rgba(21, 21, 21, 9);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  display: none;
  text-align: center;
  span {
    color: white;
  }
}
.video-control-volume-blur {
  width: 30px;
  margin: 0 auto;
  height: 60px;
  cursor: default;
  position: relative;
}
.video-control-volume-white {
  height: 100%;
  width: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 1.5px;
  overflow: hidden;
  margin: auto;
  background: #e7e7e7;
  display: flex;
  align-items: flex-end;
}
.video-control-volume-blue {
  background-color: #00a1d6;
  height: 2px;
  width: 100%;
}
.video-control-volume-ball {
  width: 12px;
  height: 12px;
  background: #00a1d6;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
}
.video-control-images {
  width: 80px;
  height: 50px;
  background: white;
  position: absolute;
  bottom: 38px;
  left: 5px;
  border-radius: 4px;
  text-align: center;
  display: none;
  span {
    position: absolute;
    bottom: 38px;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
  }
}
.video-warp-dm {
  background: #f4f4f4;
  border-radius: 4px;
  border: 1px solid #f4f4f4;
  .video-dm {
    display: flex;
  }
  .video-dm-input {
    color: #212121;
    -webkit-box-flex: 1;
    flex-grow: 1;
    border: 0;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    z-index: 12;
    padding: 0 5px;
    background: none;
    font-size: 12px;
    min-width: 115px;
    width: 100%;
    outline: none;
  }
  .video-dm-send {
    z-index: 13;
    height: 30px;
    min-width: 60px;
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 0 2px 2px 0;
    background-color: #00a1d6;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: #00b5e5;
    }
  }
}
.dmtext {
  span {
    position: absolute;
    top: 0px;
    right: -50px;
    font-size: 15px;
    color: #e7e7e7;
  }
}
.dmtext .row {
  transition: transform 10s;
  transform: translateX(-700px);
}
</style>
<script>
export default {
  name: 'media',
  data: function () {
    return {
      currenttime: '00:00',
      duration: '00:00',
      chagestate: true,
      progresstext: 0,
      volumestate: 1,
      framestext: '00:00',
      dmtexts: [
        {
          'time': '00:05',
          'text': '哇这也太好看了吧'
        },
        {
          'time': '00:12',
          'text': '666'
        },
        {
          'time': '00:15',
          'text': '2333'
        },
        {
          'time': '00:25',
          'text': '151515'
        },
        {
          'time': '00:35',
          'text': '牛逼啊'
        },
        {
          'time': '00:45',
          'text': '卢本伟牛逼'
        }
      ],
      licktext: 0
    }
  },
  mounted: function () {
    this.media = document.getElementById('media')
    this.state = this.dom('video-state').children[0]
    // 总时长获取
    setTimeout(() => {
      this.duration = this.changetime(this.media.duration)
    }, 800)
    // 音量初始值设置
    this.dom('video-control-volume-ball').style.transform = 'translateY(' + -this.media.volume * 50 + 'px)'
    this.dom('video-control-volume-blue').style.height = this.media.volume * 50 + 'px'
    this.progresstext = this.media.volume * 100
  },
  methods: {
    // dom封装
    dom: function (value) {
      if (this.$el.getElementsByClassName(value).length > 1) {
        return this.$el.getElementsByClassName(value)
      } else {
        return this.$el.getElementsByClassName(value)[0]
      }
    },
    // 转化成万为单位
    keeptwo: function (num) {
      return num > 10000 ? (Math.floor(num / 1000) / 10 + '万') : num
    },
    // 开始
    start: function (event) {
      this.media.play()
      this.state.style.display = 'none'
      this.chagestate = false
      this.time = setInterval(this.changeblur, 1000)
    },
    // 暂停
    pasued: function (event) {
      this.media.pause()
      this.chagestate = true
      this.state.style.display = 'block'
      clearInterval(this.time)
    },
    // 进度条变化
    changeblur: function () {
      let time = Math.floor(this.media.currentTime) / Math.floor(this.media.duration)
      this.currenttime = this.changetime(this.media.currentTime)
      this.duration = this.changetime(this.media.duration)
      let blue = this.dom('video-control-progress-blue')
      blue.style.width = time * 100 + '%'
    },
    // 鼠标点击切换进度条
    progressblur: function (ev) {
      let current = ev.currentTarget
      let left = this.dom('video-control-progress-grey').getBoundingClientRect().left
      let length = Math.floor(ev.clientX - left)
      this.dom('video-control-progress-blue').style.width = length + 'px'
      this.media.currentTime = Math.floor(this.media.duration * length / current.offsetWidth)
      this.changeblur()
    },
    // 截取帧
    capureimg: function (width, heigth) {
      let canves = document.createElement('canvas')
      canves.width = width
      canves.height = heigth
      canves.getContext('2d').drawImage(this.media, 0, 0, canves.width, canves.height)
      return canves.toDataURL('images/png')
    },
    // 拖动显示帧
    onmoveframes: function (ev) {
      this.dom('video-control-progress').style.height = '3.5px'
      this.dom('video-control-images').style.display = 'block'
      let left = this.dom('video-control-progress-grey').getBoundingClientRect().left
      let length = Math.floor(ev.clientX - left)
      this.framestext = this.changetime(this.media.duration * (length / this.dom('video-control-progress').offsetWidth))
      this.$refs.images.style.left = length - 25 + 'px'
      if (this.dom('framesimg')) {
        this.$refs.images.removeChild(this.dom('framesimg'))
      }
      let img = document.createElement('img')
      img.src = this.capureimg(80, 50)
      img.className = 'framesimg'
      this.$refs.images.appendChild(img)
    },
    // 移出帧显示
    onoutframes () {
      this.dom('video-control-progress').removeAttribute('style')
      this.dom('video-control-images').style = 'none'
    },
    // 秒转化成时间
    changetime: function (time) {
      time = Math.floor(time)
      let minute = time > 60 ? Math.floor(time / 60) : '0'
      let second = Math.floor(time % 60)
      let date = (minute >= 10 ? minute : '0' + minute) + ':' + (second >= 10 ? second : '0' + second)
      return date
    },
    // 时间转换成数字
    onnumber (time) {
      return Number(time.split(':').join(''))
    },
    // 音量显示
    displayvolume: function () {
      this.volumestate = -this.volumestate
      if (this.volumestate === -1) {
        this.$refs.progress.style.display = 'block'
      } else {
        this.$refs.progress.style.display = 'none'
      }
    },
    // 音量变化事件
    volumechage: function (ev) {
      let length = Math.floor(Math.abs(ev.clientY - this.$refs.volume.getBoundingClientRect().bottom))
      if (length <= 50) {
        this.dom('video-control-volume-ball').style.transform = 'translateY(' + -length + 'px)'
        this.progresstext = length * 2
        this.$refs.blue.style.height = length + 'px'
        this.media.volume = length * 2 * 0.01
      }
    },
    // 全屏兼容
    launchFullscreen: function (element) {
      // 此方法不可以在異步任務中執行，否則火狐無法全屏
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.oRequestFullscreen) {
        element.oRequestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      } else {
        var docHtml = document.documentElement
        var docBody = document.body
        var videobox = document.getElementById('videobox')
        var cssText = 'width:100%;height:100%;overflow:hidden;'
        docHtml.style.cssText = cssText
        docBody.style.cssText = cssText
        videobox.style.cssText = cssText + ';' + 'margin:0px;padding:0px;'
        document.IsFullScreen = true
      }
    },
    // 全屏
    esc () {
      this.launchFullscreen(this.media)
    },
    // 宽屏
    maxwidth () {
      if (this.dom('play').className === 'play maxwidth') {
        this.dom('play').className = 'play'
      } else {
        this.dom('play').className += ' maxwidth'
      }
    },
    // 生成弹幕
    createdm () {
      let create = {}
      create['time'] = this.changetime(this.media.currentTime)
      create['text'] = this.$refs.dminput.value
      this.dmtexts.push(create)
      this.$refs.dminput.value = ''

      // console.log(this.dmtexts)
    },
    // 弹幕判断
    dmtextchange (dm, i) {
      console.log(i)
      if (this.onnumber(dm.time) <= this.onnumber(this.currenttime)) {
        this.$refs.dmtext.children[i].className = 'row'
        return dm.text
      }
    },
    // 点赞功能
    imgchage (ev) {
      let current = ev.currentTarget
      current.children[0].src = 'static/images/head1.png'
    },
    imgreset (ev) {
      let current = ev.currentTarget
      current.children[0].src = 'static/images/head.png'
    },
    addtext () {
      ++this.licktext
    }
  }
}
</script>
