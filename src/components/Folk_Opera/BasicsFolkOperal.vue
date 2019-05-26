<template>
  <div>
    <img :src="data.imgurl"
         alt="">
    <div class='right'>
      <p>{{data.p}}</p>
      <span>{{data.max}}</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
div {
  display: flex;
  img {
    width: 72px;
    height: 72px;
  }
  p {
    word-wrap: break-word;
    width: 96px;
    height: 28px;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
  }
}
</style>
<script>
export default {
  name: 'BasicsFolkOperal',
  props: ['data']
}
</script>
