<template>
  <div id="app">
    <span class="icon iconfont icon-yingbi"></span>
    <v-header :succeed='succeed'></v-header>
    <v-main></v-main>
  </div>
</template>

<script>
import heade from '@/components/header'
import mainer from '@/components/main'
export default {
  name: 'App',
  data () {
    return {
      succeed: false
    }
  },
  components: {
    vHeader: heade,
    vMain: mainer
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
