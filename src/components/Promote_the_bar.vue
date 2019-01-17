<template>
  <div class="generalize">
    <figure><i></i>
      <h1>推广</h1>
    </figure>
    <div class="people-counting">
      <span :title="'在线观看'+promatebar[0].readpeople">在线人数{{promatebar[0].people}}</span>
      <span>最新投稿:{{promatebar[0].contribute}}</span>
    </div>
  </div>
</template>
<style lang="less">
.generalize {
  display: flex;
  justify-content: space-between;
  figure {
    display: flex;
    i {
      width: 40px;
      display: inline-block;
      height: 40px;
      background-position: -141px -75px;
    }
    h1 {
      font-size: 24px;
      margin-left: 10px;
    }
  }
  .people-counting {
    border-radius: 4px;
    text-align: center;
    background: #e5e9ef;
    white-space: nowrap;
    padding: 0 10px;
    height: 34px;
    line-height: 34px;
    span {
      color: #6d757a;
      cursor: pointer;
      &:hover {
        color: #00a1d6;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'promate',
  props: ['promatebar']
}
</script>
