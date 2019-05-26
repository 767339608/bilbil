<template>
  <ul class="reply-wrap">
    <li v-for="(reply,index) in createreply(total)"
        :key='index'
        class='reply-wrap-li'
        @click='replyfunction($event,index)'>
      <figure>
        <img :src="reply.img"
             alt="">
      </figure>
      <h3>{{reply.name}}</h3>
      <span>#{{reply.index}}</span><time>{{reply.time}}</time>
      <button>回复</button>
      <p class='text'>{{reply.text}}</p>
      <div class="reply-item"
           v-for="(reply,index) in reply.replyall"
           :key='index'>
        <figure>
          <img :src="reply.img"
               alt="">
          <h3>{{reply.name}}</h3>
          <span v-if='reply.toname'>回复</span>
          <a>{{reply.toname}}</a>
          <span>{{reply.text}}</span>
        </figure>
        <div class="info"><time>{{reply.time}}</time><button class='tworeply'>回复</button></div>
      </div>
      <v-comment v-if='replyonoroff[index]'
                 ref='comment'
                 :placeholder='placeholder'
                 :level='2'></v-comment>
    </li>
  </ul>
</template>
<style lang="less" scoped>
.reply-wrap {
  & > .reply-wrap-li {
    position: relative;
    margin-left: 75px;
    & > figure {
      position: absolute;
      left: -75px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
  }
  .text {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .reply-item {
    margin-bottom: 20px;
    figure {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      h3 {
        font-size: 12px;
        color: #6d757a;
        cursor: pointer;
        margin: 0 10px;
        &:hover {
          color: #00a1d6;
        }
      }
      img {
        border-radius: 50%;
        width: 24px;
        height: 24px;
      }
    }
  }
  h3 {
    color: #fb7299;
  }
  span {
    margin-right: 20px;
  }
  span,
  time,
  button {
    color: #99a2aa;
    font-size: 12px;
  }
  button {
    background: none;
    padding: 4px 5px;
    border: none;
    border-radius: 4px;
    margin-right: 15px;
    cursor: pointer;
    outline: none;
    &:hover {
      color: #00a1d6;
      background: #d9d9da;
    }
  }
}
</style>

<script>
import comment from '@/components/reply/comment'
export default {
  name: 'reply',
  props: ['total', 'pagesize', 'currentPage1'],
  components: {
    vComment: comment
  },
  data () {
    return {
      // 回复开关
      replyonoroff: [],
      placeholder: ''
    }
  },
  methods: {
    // 回复内容初始化
    createreply (data) {
      let arr = []
      let j = 0
      let length = this.currentPage1 * this.pagesize
      if (data.length < length) {
        length = data.length
      }
      for (let i = (this.currentPage1 - 1) * this.pagesize; i < length; i++) {
        arr[j] = data[i]
        j++
      }
      return arr
    },
    // 点击回复出现回复
    replyfunction (ev, index) {
      if (ev.target.nodeName === 'BUTTON') {
        // 初始回复评论设置
        for (let i = 0; i < this.total.length; i++) {
          this.replyonoroff[i] = false
        }
        this.replyonoroff.splice(index, 1, true)
        if (ev.target.className === 'tworeply') {
          let name = ev.target.parentNode.parentNode.children[0].children[1].innerText
          this.placeholder = '回复 @' + name
        } else {
          this.placeholder = '请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。'
        }
      }
    }
  },
  updated () {
    if (this.$refs.comment) {
      this.$refs.comment[0].$el.children[1].focus()
      this.$refs.comment[0].$el.children[1].value = ''
    }
  }
}
</script>
