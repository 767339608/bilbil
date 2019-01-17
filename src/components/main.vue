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
        <v-slider :slidershow="slidershow"></v-slider>
        <v-asidetable :imgurl='imgurl'></v-asidetable>
      </div>
      <!-- 推广栏 -->
      <v-promate :promatebar='promatebar'></v-promate>
      <div class="mask">
        <v-video v-for="(video , index) in videos"
                 :key="index"
                 :videovalue="video"></v-video>
        <figure class='mask-img'><img src="static/images/43bc9b1e5c6095ece0f6b6219145252ee9fc6c9e.jpg"
               alt=""
               width="260px"
               height="150px"></figure>
      </div>
      <!-- 动画栏 -->
      <div class="animation">
        <div class="animation-left">
          <v-animationtitle :newvideo='newvideo'></v-animationtitle>
          <div class="animation-video">
            <v-animationvideo v-for="(video, index) in animationvideos"
                              :animationvideovalue='video'
                              :key="index"></v-animationvideo>
          </div>
        </div>
        <v-animationaside :animationasidevalue="animationasides"></v-animationaside>
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
import animationtitle from '@/components/animation/animation-title'
import animationvideo from '@/components/animation/animationvideo'
import animationaside from '@/components/animation/animation-aside'
export default {
  $el: 'article',
  name: 'mainer',
  components: {
    vTopimg: topimg,
    vSlider: Slider,
    vAsidetable: asidetable,
    vPromate: promate,
    vVideo: Video,
    vAnimationtitle: animationtitle,
    vAnimationvideo: animationvideo,
    VAnimationaside: animationaside
  },
  data () {
    return {
      navs: [
        { text: '首页' },
        { text: '动画' },
        { text: '番剧' },
        { text: '国创' },
        { text: '音乐' }
      ],
      slidershow: [
        {
          img: 'slider1.jpg',
          p: '像我一样_____的，还有四个!'
        },
        {
          img: 'slider2.jpg',
          p: '提前规划，不走弯路？看这'
        },
        {
          img: 'slider3.jpg',
          p: '你为了别人，放弃了多少自己'
        },
        {
          img: 'slider4.jpg',
          p: '故事王2你记住了哪些梗？'
        },
        {
          img: 'slider5.jpg',
          p: '极致唯美'
        }
      ],
      imgurl: [
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        },
        {
          img: 'static/images/ec41e1ae9aff6d25a4d19ee4a0fe2547b21d7fd2.jpg@160w_100h.webp',
          title: '【东方交响曲】东方星莲船串烧【交响ActiveNEETs】'
        }
      ],
      promatebar: [
        {
          readpeople: '6245774',
          people: '4569210',
          contribute: '60002'
        }
      ],
      videos: [
        {
          videotime: '10:10',
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
      newvideo: '5151',
      animationvideos: [
        {
          videotime: '10:10',
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
          title: '屏幕中的王嘉尔突然穿越到现实!? 韩国人看王嘉尔《Different Game》MV',
          img: 'static/images/c7c2a073e71730bbf8c3368172e92225fd1022dc.jpg@200w_125h.webp',
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
      ]
    }
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
