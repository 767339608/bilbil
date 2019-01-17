<template>
  <aside class='aside-recommend'>
    <ul class="img">
      <li v-for='(url,index) in imgurl'
          :title='url.title'
          :key='index'>
        <img :src='url.img'
             alt="">
        <div class="imgshadow"><span class='title'>{{url.title}}</span></div>
      </li>
    </ul>
    <span class="rec-btn prev">昨日</span>
    <span class="rec-btn next">一周</span>
  </aside>
</template>
<style lang="less">
.aside-recommend {
  width: 720px;
  position: relative;
  &:hover {
    .rec-btn {
      opacity: 1;
    }
  }
  & > ul {
    & > li {
      position: relative;
      display: inline-block;
      margin: 0 0 20px 20px;
      cursor: pointer;
      overflow: hidden;
      @width: 160px;
      &:hover {
        .imgshadow {
          opacity: 0.7;
          width: @width;
          height: 100px;
          top: 0;
          background: #000;
          color: white;
          display: flex;
          align-items: center;
        }
      }
      .imgshadow {
        width: 150px;
        height: 20px;
        position: absolute;
        right: 0;
        padding: 0 5px;
        bottom: 0;
        overflow: hidden;
        color: white;
      }
    }
  }
  .rec-btn {
    display: inline-block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url(../assets/images/icons2.png);
    width: 20px;
    top: 50%;
    margin-top: -8px;
    cursor: pointer;
    color: #fff;
    text-align: center;
    transition: 0.3s;
    opacity: 0;
  }
  .prev {
    left: 20px;
    border-radius: 0 4px 4px 0;
    padding: 13px 5px 13px 10px;
    background-position: 6px -1211px;
  }
  .next {
    right: 0;
    border-radius: 4px 0 0 4px;
    padding: 13px 10px 13px 5px;
    background-position: 25px -1262px;
  }
}
</style>
<script>
export default {
  name: 'asidetable',
  props: ['imgurl']
}
</script>
