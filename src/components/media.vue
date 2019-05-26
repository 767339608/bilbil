<template>
  <div class="center">
    <div class="left">
      <!-- 播放 -->
      <div class="video-info">
        <h1 class='video-title'
            :title='medianame(this.$route.params.id)'>{{medianame(this.$route.params.id)}}</h1>
        <div class="video-data"></div>
        <div class="video-data">
          <span class='view'
                :title="'总播放数'+mediaview(this.$route.params.id)">{{conversion(mediaview(this.$route.params.id))+'播放'}}&nbsp;&nbsp;</span>
          <span class='dm'
                :title="'历史累计弹幕'+this.dmtexts.length">{{conversion(this.dmtexts.length)+'弹幕'}}</span>
          <span class='copyright'>未经作者授权，禁止转载
          </span>
        </div>
      </div>
      <!-- 视频 -->
      <div class="play"
           ref='play'>
        <div class="video-warp">
          <div class="video-top"></div>
          <div class="video-state"
               ref='videostate'>
            <img src="static/images/start.png"
                 alt=""
                 @click="start($event)">
          </div>
          <div class="video"
               @click='pasued($event)'>
            <video :src="mediavideo(this.$route.params.id)"
                   preload=auto
                   id='media'></video>
          </div>
          <!-- 视频底部功能 -->
          <div class="video-control">
            <div class="video-control-top">
              <div class="video-control-progress"
                   @click='progressblur($event)'
                   @mousemove="onmoveframes($event)"
                   @mouseout="onoutframes()"
                   ref='progress'>
                <div class="video-control-progress-grey"
                     ref='pargressgrey'></div>
                <div class="video-control-progress-blue"
                     ref='pargressblue'></div>
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
              <div class="video-control-time">{{currenttime}} / {{duration}}</div>
              <div class="video-unfined"></div>
              <div class="video-control-volume"
                   @click='displayvolume'
                   title="音量">
                <img src="static/images/volume.png"
                     alt="">
                <div class="video-control-volume-progress"
                     ref="volumeProgress">
                  <span>{{progresstext}}</span>
                  <div class="video-control-volume-blur"
                       @mousemove="volumechage($event)"
                       ref="volume">
                    <div class="video-control-volume-white"
                         ref='white'>
                      <div class="video-control-volume-blue"
                           ref='blue'></div>
                    </div>
                    <div class="video-control-volume-ball"
                         ref='volumeball'></div>
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
        <!-- 视频弹幕 -->
        <div class="dmtext"
             ref='dmtext'>
          <span v-for="(dm,i) in mediadmtexts(this.$route.params.id)"
                :key="i"
                :title=i>{{dmtextchange(dm,i)}}</span>
        </div>
      </div>
      <!-- 小功能 -->
      <div class="smallfeature">
        <!-- 点赞 -->
        <div class="getlike"
             @mouseenter="imgchage($event)"
             @mouseleave="imgreset($event)"
             @click='addtext()'><img src="static/images/head.png"
               alt=""><span>{{licktext}}</span></div>
        <!-- 星星评分 -->
        <el-rate v-model="value3"
                 show-text
                 :allow-half="true"
                 score-template='{value}'>
        </el-rate>
      </div>
      <!-- 详细信息 -->
      <p class="detail">
        {{mediatitle(this.$route.params.id)}}
      </p>
      <!-- 评论功能 -->
      <div class="commentfunction">
        <h1 class='commenttitle'>{{mediaTotalLength(this.$route.params.id)}}<span>评论</span></h1>
        <!-- 分页 -->
        <div class="paging">
          <ul class="pagingleft"
              @click='pagcolor($event)'>
            <li>
              <h3 class='on'>全部评论</h3>
            </li>
            <li>
              <h3>按热度排序</h3>
            </li>
          </ul>
          <el-pagination :current-page.sync="currentPage1"
                         :page-size="pagesize"
                         layout="total, prev, pager, next"
                         :total="mediaTotalLength(this.$route.params.id)">
          </el-pagination>
        </div>
      </div>
      <!-- 回复 -->
      <div class="reply">
        <v-comment :placeholder="placeholder"
                   :level='1'></v-comment>
        <div class="reply-middle">
          <v-reply :total='mediaTotal(this.$route.params.id)'
                   :pagesize='pagesize'
                   :currentPage1='currentPage1'></v-reply>
        </div>
      </div>
    </div>
    <!-- 右侧功能 -->
    <div class="right"
         ref='right'>
      <!-- 投稿人 -->
      <!-- 弹幕列表 -->
      <div class="dm-item">
        <div class="dm-item-header"
             @click='unfolddmItem()'>
          <div class="dm-item-header-left">
            <span class='dm-item-title'>弹幕列表</span>
          </div>
          <span>{{unfold}}</span>
        </div>
        <div class="dm-item-main"
             ref='dmItemMain'>
          <div class="dm-item-main-title"
               @click='dmsort($event)'>
            <h3>时间</h3>
            <h3>弹幕内容({{dmtexts.length}})</h3>
            <h3>发送时间</h3>
          </div>
          <ul class='dm-item-main-ul'>
            <li class="dm-item-main-li"
                v-for='(time,index) in dmtexts'
                :key='index'>
              <span class="dm-item-main-left">{{time.time}}</span>
              <span class="dm-item-main-middle">{{time.text}}</span>
              <span class="dm-item-main-right">{{time.sendtime}}</span>
              <div class="dm-item-button">
                <button>屏蔽用户</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 相关推荐 -->
      <div class="associativeFunction">
        <h2>相关推荐</h2>
        <ul class="associtivevideo">
          <li v-for="(video,index) in videos"
              :key='index'>
            <v-video :videovalue="video"
                     :id='video.mediaid'></v-video>
            <div class="associtveright">
              <p>{{video.title}}</p>
              <span>{{username(video.nameid)}}</span><br>
              <span>{{conversion(mediaview(video.mediaid))}}播放</span>
              <span>{{conversion(mediadmlength(video.mediaid))}}弹幕</span>
            </div>

          </li>
        </ul>
      </div>
    </div>
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
// 左侧
.left {
  width: 127%;
  margin-right: 50px;
}
.play {
  position: relative;
  overflow: hidden;
  .play-bottom {
    padding-bottom: 10px;
    margin-top: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
}
.maxwidth {
  width: 988px;
}
.smallfeature {
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .getlike {
    margin-right: 20px;
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
}
//视频
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
    width: 57%;
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
    display: inline-block;
    color: white;
    margin-top: 11px;
    margin-bottom: 3px;
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
.paging {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 20px;
  border-bottom: 0.5x solid rgba(0, 0, 0, 0.1);
  ul {
    display: flex;
    li {
      cursor: pointer;
      h3 {
        border-bottom: 1px solid transparent;
      }
    }
    li:first-child {
      margin-right: 10px;
    }
  }
}
.el-pagination {
  min-width: 0;
  .li {
    min-width: 20px;
  }
}
.on {
  position: relative;
  color: #00a1d6;
  padding-bottom: 4px;
  border-color: #00a1d6 !important;
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
.detail {
  margin-top: 20px;
}
.commenttitle {
  margin-top: 20px;
  font-weight: 400;
  font-size: 18px;
  span {
    margin-left: 5px;
  }
}
.smallfeature,
.detail,
.commentfunction,
.reply {
  display: inline-block;
  width: 582px;
}
.reply {
  margin-top: 30px;
  .reply-middle {
    padding-top: 30px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
  }
  .comment {
    margin-bottom: 30px;
  }
}
.right {
  width: 77%;
  .dm-item-header {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 46px;
    width: 100%;
    background: #f4f4f4;
    color: #222;
    border-radius: 2px;
    cursor: pointer;
    box-sizing: border-box;
    .dm-item-title {
      font-size: 16px;
      color: #222;
    }
  }
  .dm-item-main {
    height: 0;
    transition: height 0.5s;
    overflow: hidden;
    .dm-item-main-title {
      display: flex;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      h3 {
        font-weight: 400;
        font-size: 12px;
        color: #6d757a;
        text-align: left;
      }
    }
    .dm-item-main-ul {
      overflow-x: hidden;
      height: 447px;
      font-size: 12px;
    }
    .dm-item-main-li {
      display: flex;
      height: 25px;
      line-height: 25px;
      position: relative;
      cursor: pointer;
      &:hover {
        .dm-item-button {
          display: block;
        }
      }
      .dm-item-button {
        position: absolute;
        right: 31px;
        display: none;
        button {
          background-color: white;
          color: #03a0d6;
          border: 1px solid #03a0d6;
          border-radius: 4px;
          &:hover {
            background-color: #03a0d6;
            color: white;
          }
        }
      }
    }
    h3:first-child,
    .dm-item-main-left {
      width: 60px;
      padding-left: 10px;
      color: #6d757a;
    }
    h3:nth-of-type(2),
    .dm-item-main-middle {
      width: 170px;
      text-align: left;
    }
    .dm-item-main-right {
      color: #6d757a;
    }
  }
  .dm-item-on {
    height: 487px;
  }
  .dm-item-off {
    height: 0;
  }
  .associativeFunction {
    h2 {
      font-size: 16px;
      color: #222;
      margin-top: 10px;
      margin-bottom: 10px;
      font-weight: 400;
    }
    .associtivevideo {
      display: flex;
      flex-direction: column;
      li {
        margin-bottom: 20px;
        display: flex;
        p {
          margin-bottom: 10px;
        }
        .associtveright {
          margin-left: 10px;
        }
        span {
          color: #999;
          margin-bottom: 4px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<script>
import comment from '@/components/reply/comment'
import reply from '@/components/reply/reply'
import video from '@/components/video'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'media',
  components: {
    vComment: comment,
    vReply: reply,
    vVideo: video
  },
  data: function () {
    return {
      currenttime: '00:00',
      duration: '00:00',
      chagestate: true,
      progresstext: 0,
      volumestate: 1,
      framestext: '00:00',
      dmtexts: [],
      licktext: 0,
      value3: 4.2,
      currentPage1: 1,
      pagesize: 5,
      placeholder: '请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。',
      unfold: '展开',
      videoswitch: false
    }
  },
  mounted: function () {
    this.dmtexts = this.mediadmtexts(this.$route.params.id)
    this.media = document.getElementById('media')
    this.state = this.$refs.videostate.children[0]
    // 总时长获取
    setTimeout(() => {
      this.duration = this.changetime(this.media.duration)
    }, 800)
    // 音量初始值设置
    this.$refs.volumeball.style.transform = 'translateY(' + -this.media.volume * 50 + 'px)'
    this.$refs.blue.style.height = this.media.volume * 50 + 'px'
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
    // 开始
    start (event) {
      this.media.play()
      this.state.style.display = 'none'
      this.chagestate = false
      this.time = setInterval(this.changeblur, 1000)
      this.videoswitch = false
    },
    // 暂停
    pasued (event) {
      // console.log(this.videoswitch)
      if (this.videoswitch) {
        this.videoswitch = false
        this.media.pause()
        this.chagestate = false
        this.state.style.display = 'block'
        clearInterval(this.time)
      } else {
        this.videoswitch = true
        this.media.play()
        this.state.style.display = 'none'
        this.chagestate = false
        this.time = setInterval(this.changeblur, 1000)
      }
    },
    // 进度条变化
    changeblur () {
      let time = Math.floor(this.media.currentTime) / Math.floor(this.media.duration)
      this.currenttime = this.changetime(this.media.currentTime)
      this.duration = this.changetime(this.media.duration)
      let blue = this.$refs.pargressblue
      blue.style.width = time * 100 + '%'
    },
    // 鼠标点击切换进度条
    progressblur (ev) {
      let current = ev.currentTarget
      let left = this.$refs.pargressgrey.getBoundingClientRect().left
      let length = Math.floor(ev.clientX - left)
      this.$refs.pargressblue.style.width = length + 'px'
      this.media.currentTime = Math.floor(this.media.duration * length / current.offsetWidth)
      this.changeblur()
    },
    // 截取帧
    capureimg (width, heigth) {
      let canves = document.createElement('canvas')
      canves.width = width
      canves.height = heigth
      canves.getContext('2d').drawImage(this.media, 0, 0, canves.width, canves.height)
      return canves.toDataURL('images/png')
    },
    // 拖动显示帧
    onmoveframes (ev) {
      this.$refs.progress.style.height = '3.5px'
      this.$refs.images.style.display = 'block'
      let left = this.$refs.pargressgrey.getBoundingClientRect().left

      let length = Math.floor(ev.clientX - left)
      this.framestext = this.changetime(this.media.duration * (length / this.$refs.progress.offsetWidth))
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
      this.$refs.progress.removeAttribute('style')
      this.$refs.images.style = 'none'
    },
    // 秒转化成时间
    changetime (time) {
      time = Math.floor(time)
      // console.log(time)
      let minute = time > 60 ? Math.floor(time / 60) : '0'
      let second = Math.floor(time % 60)
      let date = (minute >= 10 ? minute : '0' + minute) + ':' + (second >= 10 ? second : '0' + second)
      return date
    },
    // 时间转换成数字
    onnumber (time) {
      let arrnum = time.split(':')
      let num = Number(arrnum[0]) * 60 + Number(arrnum[1])
      return num
    },
    // 音量显示
    displayvolume () {
      this.volumestate = -this.volumestate
      if (this.volumestate === -1) {
        this.$refs.volumeProgress.style.display = 'block'
      } else {
        this.$refs.volumeProgress.style.display = 'none'
      }
    },
    // 音量变化事件
    volumechage (ev) {
      let length = Math.floor(Math.abs(ev.clientY - this.$refs.volume.getBoundingClientRect().bottom))
      if (length <= 50) {
        this.$refs.volumeball.style.transform = 'translateY(' + -length + 'px)'
        this.progresstext = length * 2
        this.$refs.blue.style.height = length + 'px'
        this.media.volume = length * 2 * 0.01
      }
    },
    // 全屏兼容
    launchFullscreen (element) {
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
      if (this.$refs.play.classList.contains('maxwidth')) {
        console.log(this.$refs.right.style.transform)
        this.$refs.right.removeAttribute('style')

        this.$refs.play.classList.remove('maxwidth')
      } else {
        this.$refs.right.style.transform = 'translate(-339px,648px)'
        this.$refs.play.classList.add('maxwidth')
      }
    },
    // 生成弹幕
    createdm () {
      let create = {}
      create['time'] = this.changetime(this.media.currentTime)
      create['text'] = this.$refs.dminput.value
      this.dmtexts.push(create)
      this.$refs.dminput.value = ''
    },
    // 弹幕判断
    dmtextchange (dm, i) {
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
    },
    // 评论修改
    pagcolor (ev) {
      for (let i = 0; i < ev.currentTarget.children.length; i++) {
        ev.currentTarget.children[i].children[0].className = ''
      }
      if (ev.target.nodeName === 'H3') {
        ev.target.className = 'on'
      }
    },
    // 展开所有弹幕
    unfolddmItem () {
      if (this.unfold === '展开') {
        this.unfold = '收起'
        this.$refs.dmItemMain.classList.remove('dm-item-off')
        this.$refs.dmItemMain.classList.add('dm-item-on')
      } else {
        this.unfold = '展开'
        this.$refs.dmItemMain.style.height = ''
        this.$refs.dmItemMain.classList.remove('dm-item-on')
        this.$refs.dmItemMain.classList.add('dm-item-off')
      }
    },
    // 弹幕排序
    dmsort (ev) {
      this.item = {}
      if (ev.target.innerText === '时间') {
        this.dmtexts.sort(function (a, b) {
          return this.onnumber(a.time) - this.onnumber(b.time)
        }.bind(this))
      } else if (ev.target.innerText === '发送时间') {
        console.log(2)
      } else {
        this.dmtexts.sort(function (a, b) {
          return a.text.length - b.text.length
        })
      }
    }
  },
  computed: {
    // 转化成万为单位
    conversion () {
      return (num) => num > 10000 ? (Math.floor(num / 1000) / 10 + '万') : num
    },
    ...mapState({
      videos: 'videos'
    }),
    ...mapGetters([
      'mediaid',
      'mediavideo',
      'medianame',
      'mediatitle',
      'mediadmtexts',
      'mediaTotal',
      'mediaTotalLength',
      'mediadmlength',
      'mediaview',
      'username'
    ])
  },
  destroyed () {
    clearInterval(this.time)
  }
}
</script>
