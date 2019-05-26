<template>
  <article>
    <header>
      <div class='header-left'>
        <i></i><span>番剧</span>
      </div>
      <div class='header-right'>
        <ul>
          <li v-for="(day , index) in daylist"
              :class="tablelist[index]?'on':''"
              @click="folktable(index)"
              :key="index"><span>{{day}}</span></li>
        </ul>
      </div>
    </header>
    <main>
      <VBasicsFolk v-for="(data,index) in datalist"
                   :key="index"
                   :data='data' />
    </main>
  </article>
</template>
<style lang="less" scoped>
article {
  & > header {
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    .header-left {
      span {
        font-size: 24px;
      }
    }
    i {
      display: inline-block;
      background-position: -141px -140px;
      margin-top: -10px;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
    ul {
      display: flex;
      li {
        padding-bottom: 5px;
        cursor: pointer;
        width: 70px;
        text-align: center;
      }
      .on {
        color: #00a1d6;
        border-color: #00a1d6;
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
      span {
        width: 70px;
      }
    }
  }
}
</style>
<script>
import VBasicsFolk from './BasicsFolkOperal'
export default {
  name: 'FolkOperaleft',
  data () {
    return {
      daylist: ['最新', '一', '二', '三', '四', '五', '六', '日'],
      tablelist: [],
      datalist: [
        {
          imgurl: 'static/images/slider3.jpg',
          p: 'asdsadwdasdsaasdddddddddddddddddddddddddddddddddasd',
          max: 5
        },
        {
          imgurl: 'static/images/slider3.jpg',
          p: 'asdsadwdasdsadasd',
          max: 5
        },
        {
          imgurl: 'static/images/slider3.jpg',
          p: 'asdsadwdasdsadasd',
          max: 5
        },
        {
          imgurl: 'static/images/slider3.jpg',
          p: 'asdsadwdasdsadasd',
          max: 5
        }
      ]
    }
  },
  components: {
    VBasicsFolk
  },
  mounted () {
    this.tablelist = this.daylist.map(() => false)
    this.tablelist[0] = true
  },
  methods: {
    folktable: function (index) {
      this.tablelist = this.daylist.map(() => false)
      this.tablelist[index] = true
    }
  }
}
</script>
