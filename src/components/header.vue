<template>
  <header class="header">
    <div class="center">
      <nav>
        <ul>
          <li>
            <router-link to='/'>
              <svg class="icon">
                <use xlink:href="#icon-dianshiju-"></use>
              </svg>
              主站
            </router-link>
          </li>
          <li>
            <a href>画友</a>
          </li>
          <li>
            <a href>音频</a>
          </li>
          <li>
            <a href>游戏中心</a>
          </li>
          <li>
            <a href>直播</a>
          </li>
          <li>
            <a href>会员购</a>
          </li>
          <li>
            <a href>漫画</a>
          </li>
          <li>
            <a href>
              <svg class="icon">
                <use xlink:href="#icon-shouji54"></use>
              </svg>
              下载APP
            </a>
          </li>
        </ul>
      </nav>
      <aside>
        <template v-if="succeed.verify">
          <img src="static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg"
               alt=""
               class='heads headshover'
               @mouseenter="header()"
               @mouseleave="unheader()">
          <!-- 头像二级菜单 -->
          <div class="heads-driectory"
               @mouseenter='header()'
               @mouseleave='unheader()'>
            <article>
              <header class="driectory-header">
                <h3 name="usename">{{succeed.usename}}</h3>
                <span name="rank">{{succeed.rank}}</span>
                <!-- 存放的货币 -->
                <div class="currency">
                  <div class="coin">
                    <svg class="icon"
                         aria-hidden="true">
                      <use xlink:href="#icon-yingbi"></use>
                    </svg>
                    <span>{{succeed.money}}</span>
                  </div>
                  <div class="driectory-verify">
                    <div class="driectory-email">
                      <svg class="icon"
                           aria-hidden="true">
                        <use xlink:href="#icon-icon-p_xinfeng"></use>
                      </svg>
                    </div>
                    <!-- 已绑定手机 -->
                    <div class="driectory-iphone">
                      <svg class="icon"
                           aria-hidden="true">
                        <use xlink:href="#icon-shouji54"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 等级 -->
                <div class="level">
                  <span>等级：</span>
                  <a href="#">
                    <div class="leveldot">
                      <span>{{succeed.level}}</span>
                    </div>
                    <!-- 进度条 -->
                    <div class="linear">
                      <div class="shade-linear"></div>
                    </div>
                  </a>
                </div>
                <!-- 经验 -->
                <div class="experience">{{succeed.experience}}
                  <span>/4500</span>
                </div>
              </header>
              <div class="heads-menus">
                <ul>
                  <li>
                    <a href>个人中心</a>
                  </li>
                  <li>
                    <a href>投稿管理</a>
                  </li>
                  <li>
                    <a href>b 币钱包</a>
                  </li>
                  <li>
                    <a href>直播中心</a>
                  </li>
                  <li>
                    <a href>订单中心</a>
                  </li>
                </ul>>
              </div>
              <a class="esc"
                 @click="quit">退出</a>
            </article>
          </div>
        </template>
        <template v-else>
          <router-link to="/login"
                       tag='div'>
            <div class='positionlogin'
                 @mouseenter="hovertologin"
                 @mouseleave="unhovertologin">
              <svg class="icon heads">
                <use xlink:href="#icon-icontouxiang"></use>
              </svg>
            </div>
          </router-link>
          <div class='tologin'
               @mouseenter="hovertologin"
               @mouseleave="unhovertologin"
               style='display:none'>
            <p>登录之后你可以:</p>
            <div class="img">
              <img src="static/images/danmu.png"
                   alt=""
                   class='move'>
              <img src="static/images/danmu.png"
                   alt=""
                   class='move'>
            </div>
            <router-link to='/login'>
              登录
            </router-link>
            <p>首次使用？<router-link to='/register'>点我去注册</router-link>
            </p>
          </div>
        </template>
        <ul class="personal-details">
          <template v-if="succeed.verify">
            <li>
              <a href>大会员</a>
            </li>
            <li>
              <a href>消息</a>
            </li>
            <li>
              <a href>动态</a>
            </li>
            <li>
              <a href>稍后再看</a>
            </li>
            <li>
              <a href>收藏夹</a>
            </li>
          </template>
          <li>
            <a href>历史</a>
          </li>
        </ul>
        <!-- 大会员二级菜单 -->
        <!-- 动态二级菜单 -->
        <!-- 稍后再看二级菜单 -->
        <!-- 消息二级菜单 -->
        <!-- 收藏二级菜单 -->
        <!-- 历史二级菜单 -->
        <a class="contribute"
           href="#">投稿</a>
      </aside>
    </div>
  </header>
</template>
<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 16px;
}
.header {
  background: grey;
  & > .center {
    width: 1160px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    ul > li {
      height: 42px;
      padding: 0 7px;
      display: flex;
      &:last-child {
        .icon {
          color: #23ade5;
        }
      }
    }
    & > nav {
      a {
        line-height: 42px;
        color: white;
      }
      & > ul {
        display: flex;
        & > li:hover {
          background: #555;
        }
      }
    }
    & > aside {
      display: flex;
      align-items: center;
      position: relative;
      .heads {
        @width: 2em;
        color: grey;
        position: relative;
        z-index: 20;
        background-color: white;
        border-radius: 50%;
        width: @width;
        height: @width;
        transition: 0.5s;
        margin: 0 17px;
        cursor: pointer;
      }
      .heads-driectory {
        display: none;
        width: 260px;
        padding: 50px 0 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border-radius: 0 0 4px 4px;
        height: 200px;
        position: absolute;
        background: white;
        top: 46px;
        left: -22%;
        z-index: 5;
        transition: 0.5s 0.5s;
        &:hover {
          display: block;
        }
        article {
          margin: 0 20px;
          .currency {
            display: flex;
            justify-content: space-between;
            .coin {
              .icon {
                width: 1.2rem;
                height: 1.2rem;
                background: #23ade5;
                border-radius: 50%;
                color: white;
              }
            }
            .driectory-verify {
              display: flex;
              .driectory-email,
              .driectory-iphone {
                background: grey;
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                .icon {
                  color: white;
                  border-radius: 50%;
                  margin-top: 1.2px;
                }
              }
              .driectory-iphone {
                margin-left: 5px;
                background: #23ade5;
              }
            }
          }
          .level {
            display: flex;
            margin-top: 10px;
            a {
              display: flex;
              .leveldot {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: #f3cb85;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .linear {
                width: 159px;
                display: flex;
                justify-content: flex-start;
                background: #eee;
                height: 6px;
                margin-top: 6px;
                .shade-linear {
                  width: 124px;
                  background: #f3cb85;
                  height: 100%;
                }
              }
            }
          }
          .experience {
            text-align: right;
            span {
              color: #ccc;
            }
          }
          .heads-menus {
            ul {
              li {
                float: left;
                width: 100px;
                height: auto;
                padding: 5px 0;
                text-align: right;
                a {
                  color: black;
                  &:hover {
                    color: #00a1d6;
                  }
                }
              }
            }
          }
          .esc {
            position: absolute;
            right: 10px;
            bottom: 10px;
          }
        }
      }
      .personal-details {
        display: flex;
        & > li > a {
          line-height: 42px;
          color: white;
          &:hover {
            background: #555;
          }
        }
      }
      .contribute {
        background: #f45a8d;
        font-size: 14px;
        text-align: center;
        width: 68px;
        height: 46px;
        display: block;
        border-radius: 0 0 6px 6px;
        margin-left: 15px;
        &:hover {
          background-color: #fb7299;
        }
      }
      .positionlogin {
        height: 45px;
        display: flex;
        align-items: center;
      }
      .tologin {
        position: absolute;
        background: #fff;
        left: 5%;
        width: 320px;
        margin-left: -160px;
        padding: 12px;
        text-align: left;
        line-height: normal;
        z-index: 5;
        top: 101%;
        border: 1px solid #e5e9ef;
        .img {
          width: 320px;
          height: 200px;
          margin: 12px 0;
          overflow: hidden;
          position: relative;
          background: url(../assets/images/backgrounddanmu.png) no-repeat 50%;
          img {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        & > a {
          display: block;
          height: 43px;
          line-height: 43px;
          text-align: center;
          background: #00a1d6;
          border-radius: 4px;
          font-size: 14px;
          color: #fff;
        }
        & > p:last-of-type {
          margin-top: 8px;
          text-align: center;
          font-size: 12px;
          color: #282828;
          a {
            color: #00a1d6;
          }
        }
      }
      & > a {
        color: white;
        line-height: 46px;
        &:hover {
          background-color: #555;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'heade',
  props: ['succeed'],
  created: function () {
    this.index = 320
    this.index2 = 0
  },
  mounted: function () {
    if (this.dom('tologin')) {
      this.dom('tologin').style.display = 'none'
      this.dom('move')[1].style.left = this.index + 'px'
      this.time = setInterval(this.imgmove, 25)
    }
  },
  methods: {
    quit () {
      this.$emit('quit')
    },
    // dom封装
    dom: function (value) {
      if (this.$el.getElementsByClassName(value).length > 1) {
        return this.$el.getElementsByClassName(value)
      } else {
        return this.$el.getElementsByClassName(value)[0]
      }
    },
    // 用户hover
    header: function () {
      this.dom('headshover').style.transform = 'scale(2) translateY(10px)'
      this.dom('heads-driectory').style.display = 'block'
    },
    unheader: function () {
      this.dom('headshover').style.transform = ''
      this.dom('heads-driectory').style.display = 'none'
    },
    // 提取数字
    num: function (string) {
      return parseInt(string.substr(1))
    },
    // index弹幕
    imgmove: function () {
      setTimeout(() => {
        this.index--
        this.index2--
      }, 1)
      if (this.index2 === -320) {
        this.index2 = 320
      }
      if (this.index === -320) {
        this.index = 320
      }
      this.dom('move')[0].style.left = this.index2 + 'px'
      this.dom('move')[1].style.left = this.index + 'px'
    },
    // 登录hover
    hovertologin: function () {
      this.dom('tologin').style.display = 'block'
    },
    unhovertologin: function () {
      this.dom('tologin').style.display = 'none'
    }
  }

}
</script>
