// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    promatebar: {
      readpeople: '6245774',
      people: '4569210',
      contribute: '60002'
    },
    newvideo: '5151',
    slidershow: [
      {
        img: 'slider1.jpg',
        p: '像我一样_____的，还有四个!',
        mediaid: '0001'
      },
      {
        img: 'slider2.jpg',
        p: '提前规划，不走弯路？看这',
        mediaid: '0001'
      },
      {
        img: 'slider3.jpg',
        p: '你为了别人，放弃了多少自己',
        mediaid: '0001'
      },
      {
        img: 'slider4.jpg',
        p: '故事王2你记住了哪些梗？',
        mediaid: '0001'
      },
      {
        img: 'slider5.jpg',
        p: '极致唯美',
        mediaid: '0001'
      }
    ],
    imgurl: [
      {
        mediaid: '0002',
        img: 'static/images/a019268e7d09d2db2f0dcd02ff352f84e5ef2b25.jpg@160w_100h.jpg',
        title: '【白上吹雪×夏色祭】夜间放送来啦！是久违了的联动杂谈じゃい(^・ω・^§)ﾉ'
      },
      {
        mediaid: '0002',
        img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
        title: 'Galgame吧「Elite Galgame 2018」评选结果'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0003',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0004',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      }
    ],
    weekimgurl: [
      {
        mediaid: '0001',
        img: 'static/images/0f300be22f89d758f8f14005162210866194f64c.jpg@160w_100h.jpg',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/0f300be22f89d758f8f14005162210866194f64c.jpg@160w_100h.jpg',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/0f300be22f89d758f8f14005162210866194f64c.jpg@160w_100h.jpg',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      }
    ],
    yestimgurl: [
      {
        mediaid: '0001',
        img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      },
      {
        mediaid: '0001',
        img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',

        title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
      }
    ],
    mediaall: {
      '0001': {
        media: 'static/media/【崩坏3】在聊天室中上演最后一课？ [AV 43270099, From JIJIDOWN.COM].mp4',
        name: '【崩坏3】在聊天室中上演最后一课？',
        dmtexts: [
          {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          }, {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          }, {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '10:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          }
        ],
        view: 121212,
        mediaid: '0001',
        title: "2019年2月精彩作画集锦及笔记，所选片段在作画方面有较高可看性，表演效果或者演出效果到位的也是好作画，视频可能较少涉及这部分。片段只从日本商业动画公司出品的商业作品中选取。BGM：Big Time Rush - Like Nobody's Around",
        total: [
          {
            name: '去地西泮',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 1,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: '嫖虫_',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '网易:我知道了，快复制腾讯:我知道了，快合作',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 2,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: '秀秀最帅',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 2,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: '来治大猩猩的吴彦祖',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          }
        ]
      },
      '0002': {
        media: 'static/media/【神楽めあ】黎明与萤火夜明けと蛍【原创PV】 [AV 43351298, From JIJIDOWN.COM].mp4',
        name: '【神楽めあ】黎明与萤火夜明けと蛍【原创PV】',
        dmtexts: [
          {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          }, {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          }, {
            'time': '00:05',
            'text': '哇这也太好看了吧',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:12',
            'text': '666',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:15',
            'text': '2333',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:25',
            'text': '151515',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:35',
            'text': '牛逼啊',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '00:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          },
          {
            'time': '10:45',
            'text': '卢本伟牛逼',
            'sendtime': '03-05 20:07'
          }
        ],
        view: 655555,
        mediaid: '0001',
        title: "2019年2月精彩作画集锦及笔记，所选片段在作画方面有较高可看性，表演效果或者演出效果到位的也是好作画，视频可能较少涉及这部分。片段只从日本商业动画公司出品的商业作品中选取。BGM：Big Time Rush - Like Nobody's Around",
        total: [
          {
            name: '去地西泮',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 1,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: '嫖虫_',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '网易:我知道了，快复制腾讯:我知道了，快合作',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 2,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: '秀秀最帅',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 2,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: '来治大猩猩的吴彦祖',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 3,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          },
          {
            name: 'abc',
            img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
            floor: '1',
            text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
            time: '2019-03-04 10:12',
            praise: '211',
            index: 4,
            replyall: [
              {
                name: '猫柚ピン',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              },
              {
                name: '萤实',
                img: 'static/images/6fd397b88b58b22124a44240585771a73643e740.jpg@160w_100h.jpg',
                text: '请问太太这个番在哪里看鸭？',
                time: '2019-03-05 22:00'
              }
            ]
          }
        ]
      }
    },
    videos: [
      {
        videotime: '10:10',
        img: 'static/images/4134255.jpg@.webp',
        mediaid: '0001',
        nameid: '0001',
        fristimg: 'static/images/7822f81d8eb094cf9b1694228565aae9af2be021.jpg@160w_100h.jpg',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        img: 'static/images/4134255.jpg@.webp',
        mediaid: '0002',
        nameid: '0001',
        fristimg: 'static/images/7822f81d8eb094cf9b1694228565aae9af2be021.jpg@160w_100h.jpg',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        img: 'static/images/4134255.jpg@.webp',
        mediaid: '0001',
        nameid: '0001',
        fristimg: 'static/images/7822f81d8eb094cf9b1694228565aae9af2be021.jpg@160w_100h.jpg',

        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        img: 'static/images/4134255.jpg@.webp',
        mediaid: '0001',
        nameid: '0001',
        fristimg: 'static/images/7822f81d8eb094cf9b1694228565aae9af2be021.jpg@160w_100h.jpg',

        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        ps: [
          {
            text: '蛋白粉哈哈哈'
          },
          {
            text: '不敢相信'
          },
          {
            text: '山山竟然请到了嘎嘎啊啊啊啊啊'
          },
          {
            text: '嘎真的出现的方面越来越广了'
          },
          {
            text: '鸭!'
          },
          {
            text: '宝宝啊'
          },
          {
            text: '老公老公!!'
          },
          {
            text: '卧槽惊了'
          },
          {
            text: '我好紧脏！！！'
          },
          {
            text: '哈哈哈哈！！！！'
          },
          {
            text: '实名羡慕松松！！！'
          }
        ]
      },
      {
        videotime: '10:10',
        img: 'static/images/4134255.jpg@.webp',
        mediaid: '0001',
        nameid: '0001',
        fristimg: 'static/images/7822f81d8eb094cf9b1694228565aae9af2be021.jpg@160w_100h.jpg',

        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      }
    ],
    animationvideos: [
      {
        videotime: '10:10',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        mediaid: '0001',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '《流浪地球》动漫电影版预告震撼上映！中日联合打造科幻动画巨作——恶搞小剧场',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【章鱼哥x海绵宝宝x燕小六】打上花火——新年最后的祝福',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '被花咲囚禁起来的铃鹿诗子.UC（字幕付）',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【庄园女子的千层套路】小小的套路"',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【Tell Me Father】玩具熊的五夜后宫短片 | 附音乐〖YouTube〗',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【藤原书记】红军最强大',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【Tell Me Father】玩具熊的五夜后宫短片 | 附音乐〖YouTube〗',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【藤原书记】红军最强大',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【Tell Me Father】玩具熊的五夜后宫短片 | 附音乐〖YouTube〗',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '【藤原书记】红军最强大',
        fristimg: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
        img: 'static/images/1207247.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      }
    ],
    newanimationvideos: [
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      },
      {
        videotime: '10:10',
        mediaid: '0001',
        title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
        fristimg: 'static/images/70b05a135fc598bbd75780438e0c262c3232d600.jpg@200w_125h.webp',
        img: 'static/images/8737781.jpg@.webp',
        ps: [
          {
            text: '这是两个人了'
          },
          {
            text: '男主这背影有点感觉有点像教主，上条教主'
          },
          {
            text: '上条当麻'
          },
          {
            text: '不是我说真的像上条'
          },
          {
            text: '前方高能'
          },
          {
            text: '谁能解释一下'
          },
          {
            text: '还是TV版看着舒服'
          },
          {
            text: '锁骨确实好吃，无论是绝味的还是周黑鸭的。'
          },
          {
            text: '名场景'
          },
          {
            text: '握草太涩情了'
          },
          {
            text: '难道不是换部片番了吗？'
          },
          {
            text: '突然变色'
          },
          {
            text: '哇！'
          },
          {
            text: '阿澄太太'
          },
          {
            text: '这是2006年'
          },
          {
            text: '这是06年能登麻美子出演的。TV版是08年的。'
          }
        ]
      }
    ],
    animationasides: [
      {
        img: 'static/images/1fe522b2c474dbe999401d80a00ad09069cd7eec.jpg@100w_63h.webp',
        h3: '2018全球最好评如潮的动画，第一在国内竟鲜为人知！',
        p: '综合评分：333.3万'
      },
      {
        h3: '爆笑开场！1月新番大吐槽第一弹！不好笑我给你看裙底！「泛式/新番妙妙屋12」'
      },
      {
        h3: '诚实吐槽一月新番Part1：屁股奶子腿统统没有'
      },
      {
        h3: '日本美少女蜘蛛侠，驾驶EVA大战毒液使徒！'
      },
      {
        h3: '【罗罗诺亚·ZORO/爆燃】悟尽剑道，痴于剑方成剑豪'
      },
      {
        h3: '父母惨遭毒手，同伴相继被虐！新番最惨女主，老虚出来挨打！'
      },
      {
        h3: '【灯泡】关于杀老师转生成为史莱姆和咲太带一堆妹子回家这两档事'
      }
    ],
    animationsideOriginal: [
      {
        img: 'static/images/1fe522b2c474dbe999401d80a00ad09069cd7eec.jpg@100w_63h.webp',
        h3: '2018全球最好评如潮的动画，第一在国内竟鲜为人知！',
        p: '综合评分：333.3万'
      },
      {
        h3: '【藤原书记】红军最强大'
      },
      {
        h3: '2019史上最浪新番节目性感亮相！【新番咋了第二季01】'
      },
      {
        h3: '男主被女仆绑走并被夺取了一整个青春！2015年神级沙雕片！不看一定后悔！'
      },
      {
        h3: '【罗罗诺亚·ZORO/爆燃】悟尽剑道，痴于剑方成剑豪'
      },
      {
        h3: '父母惨遭毒手，同伴相继被虐！新番最惨女主，老虚出来挨打！'
      },
      {
        h3: '【灯泡】关于杀老师转生成为史莱姆和咲太带一堆妹子回家这两档事'
      }
    ],
    animationsideweek: [
      {
        img: 'static/images/1fe522b2c474dbe999401d80a00ad09069cd7eec.jpg@100w_63h.webp',
        h3: '2018全球最好评如潮的动画，第一在国内竟鲜为人知！',
        p: '综合评分：333.3万'
      },
      {
        h3: '2019史上最浪新番节目性感亮相！【新番咋了第二季01】'
      },
      {
        h3: '诚实吐槽一月新番Part1：屁股奶子腿统统没有'
      },
      {
        h3: '日本美少女蜘蛛侠，驾驶EVA大战毒液使徒！'
      },
      {
        h3: '【罗罗诺亚·ZORO/爆燃】悟尽剑道，痴于剑方成剑豪'
      },
      {
        h3: '父母惨遭毒手，同伴相继被虐！新番最惨女主，老虚出来挨打！'
      },
      {
        h3: '【灯泡】关于杀老师转生成为史莱姆和咲太带一堆妹子回家这两档事'
      }
    ],
    username: {
      '0001': {
        name: '去地西泮',
        mediaid: ['0001', '0002'],
        vip: '大会员'
      }
    }
  },
  getters: {
    // 获取当前视频
    mediaid: (state) => (id) => {
      return state.mediaall[id]
    },
    mediaida (state) {
      return function (id) {
        return state.mediaall[id]
      }
    },
    // 获取当前视频标题
    medianame: (state) => (id) => {
      return state.mediaall[id].name
    },
    // 获取当前视频内容介绍
    mediatitle: (state) => (id) => {
      return state.mediaall[id].title
    },
    // 获取当前视频video
    mediavideo: (state) => (id) => {
      return state.mediaall[id].media
    },
    // 获取当前视频弹幕
    mediadmtexts: (state) => (id) => {
      return state.mediaall[id].dmtexts
    },
    // 获取当前视频评论
    mediaTotal: (state) => (id) => {
      return state.mediaall[id].total
    },
    // 获取当前视频评论长度
    mediaTotalLength: (state) => (id) => {
      return state.mediaall[id].total.length
    },
    // 获取当前用户
    username: (state) => (id) => {
      return state.username[id].name
    },
    // 获取视频播放数
    mediaview: (state) => (id) => {
      return Number(state.mediaall[id].view)
    },
    // 获取视频弹幕长度
    mediadmlength: (state) => (id) => {
      return Number(state.mediaall[id].dmtexts.length)
    }
  },
  mutations: {
    // 1级回复增加
    addreply (state, total) {
      // console.log(state.mediaall.total)
      state.mediaall.total.push(total)
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
