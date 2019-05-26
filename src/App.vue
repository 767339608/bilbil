<template>
  <div id="app">
    <span class="icon iconfont icon-yingbi"></span>
    <v-header :succeed='succeed'
              @quit="quit"></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import heade from '@/components/header'
import maine from '@/components/main'
import footer from '@/components/footer'
export default {
  name: 'App',
  data () {
    return {
      succeed: {
        verify: true,
        usename: '来往风尘客',
        rank: '大会员',
        money: 999,
        level: '5',
        experience: '4499'
      }
    }
  },
  components: {
    vHeader: heade,
    vMain: maine,
    vFooter: footer
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    quit () {
      this.succeed.verify = false
    }
  }
}
</script>

<style  lang="less">
body,
ul,
li,
a,
div,
nav,
header,
footer,
main,
article,
section,
h1,
h2,
h3,
h4,
i,
p,
img,
figure {
  list-style: none;
  padding: 0;
  margin: 0;
}

body,
a {
  font: 13px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB,
    Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
a {
  text-decoration: none;
}
i {
  background: url(../static/images/icons.png);
}
.main-nav {
  display: flex;
  li {
    cursor: pointer;
  }
}
</style>
