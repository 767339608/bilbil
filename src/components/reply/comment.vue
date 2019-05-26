<template>
  <div class="comment">
    <img src="static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg"
         alt="">
    <textarea name=""
              id=""
              rows="5"
              cols='80'
              :placeholder="placeholder"
              autofocus
              ref='commenttext'></textarea><button @click.stop='postcomment()'>发表评论</button>
  </div>
</template>
<style lang="less" scoped>
.comment {
  display: flex;
  justify-content: space-between;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }
  textarea {
    font-size: 12px;
    display: inline-block;
    box-sizing: border-box;
    background-color: #f4f5f7;
    border: 1px solid #e5e9ef;
    overflow: auto;
    border-radius: 4px;
    color: #555;
    width: 70%;
    height: 65px;
    transition: 0s;
    padding: 5px 10px;
    line-height: normal;
    outline: none;
    resize: none;
    &:focus {
      border-color: #00a1d6;
      background-color: white;
    }
  }
  button {
    width: 70px;
    height: 64px;
    font-size: 14px;
    padding: 4px 15px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    min-width: 60px;
    vertical-align: top;
    cursor: pointer;
    background-color: #00a1d6;
    border: 1px solid #00a1d6;
    transition: 0.2s;
    outline: none;
    &:hover {
      background-color: #18bdf0;
    }
  }
}
</style>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'comment',
  props: ['placeholder', 'level'],
  methods: {
    // 发送评论并清空
    postcomment () {
      if (this.level === 1) {
        let obj = {
          name: '去地西泮',
          img: 'static/images/3b87e950352ac65ca6c8fa3ffaf2b21192138aa9.jpg',
          floor: '1',
          text: '之前打的太急了忘说了，BGM是强风ED1 リセット，大家都该来看看这大学生跑步，向井太一唱歌该死的甜美谢谢大家喜欢，但是听歌归听歌千万不要去原曲下面刷无关阿！！！！ED2也很好听，番很好看，游戏也很好玩，伊萨克获取还不用花钱，这么好的事不来了解一下吗，现在打开软件下载永远的七日之都，汗我一起快乐七十八艘跳！',
          time: '2019-03-04 10:12',
          praise: '211',
          index: this.mediaTotalLength + 1
        }
        this.addreply(obj)
      } else {
        console.log('二级', this.level)
        if (this.placeholder === '请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。') {
          console.log(1)
        } else {
          console.log(2)
        }
      }
      this.$refs.commenttext.value = ''
      this.$refs.commenttext.focus()
    },
    ...mapMutations([
      'addreply'
    ])
  },
  computed: {
    ...mapGetters([
      'mediaTotalLength'
    ])
  }
}
</script>
