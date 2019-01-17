<template>
  <div class="topbackground">
    <div class="sreach">
      <a href
         class="rankinglist">
        <span>排行榜</span>
      </a>
      <form action
            target="_blank">
        <input type="text"
               placeholder="爱了很久的朋友">
        <input type="submit"
               value>
      </form>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topbackground {
  width: 100%;
  height: 170px;
  background-image: url(/static/images/background.jpg);
  background-size: cover;
  position: relative;
  .sreach {
    position: absolute;
    bottom: 20px;
    right: 12%;
    width: 340px;
    padding: 2px 2px 2px 0;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    font-size: 12px;
    display: flex;
    .allsrcfrom {
      border-radius: 4px;
      height: 32px;
      background-color: rgba(255, 255, 255, 0.88);
    }
    .rankinglist {
      display: inline-block;
      width: 68px;
      line-height: 32px;
      .allsrcfrom();
      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }
      span {
        display: block;
        padding-left: 26px;
        color: #f25d8e;
        background: url(/static/images/icons.png) -659px -655px no-repeat;
      }
    }
    form {
      .allsrcfrom();
      display: flex;
      transform: translateX(2px);
      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }
      & > input {
        line-height: 32px;
        border: none;
        background: none;
        &[type="text"] {
          margin-left: 15px;
          outline: none;
          width: 209px;
        }
        @width: 48px;
        &[type="submit"] {
          width: calc(@width - 1px);
          height: 32px;
          cursor: pointer;
          background: url(/static/images/icons.png) -653px -721px;
          &:hover {
            background-position: -718px -721px;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'topimg'
}
</script>
