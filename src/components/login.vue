<template>

  <article>
    <div class="backgroundtop">
      <img src="static/images/rl_top.35edfde.png"
           alt=""></div>
    <div class="title">
      <span>登录</span>
    </div>
    <div class="form">
      <ul>
        <li> <input type='text'
                 placeholder="你的手机号/邮箱"
                 name='username'
                 v-model="username"
                 autocomplete="off">
          <i class="error"></i>
          <p class='text'></p>
        </li>
        <li><input type='password'
                 name='password'
                 v-model="password"
                 placeholder='密码'>
          <i class="error"></i>
          <p class='text'></p>
        </li>
        <li>
          <!-- 滑动事件 -->
        </li>
        <li class='flex'>
          <div class="checkbox">
            <input type='checkbox'>记住我
            <span>不是自己电脑上不要勾选此项</span>
          </div>
          <div class="onnew">
            <a href="">无法验证</a>
            <a href="">忘记密码</a>
          </div>
        </li>
        <li>
          <a class='login btn'
             @click="login()">登录</a>
          <router-link to='/register'
                       class='register btn'>注册</router-link>
        </li>
      </ul>
    </div>
  </article>
</template>
<style lang="less" scoped>
input {
  outline: none;
  &[type="text"],
  &[type="password"] {
    width: 388px;
    border: 1px solid #ddd;
    color: #aaa;
    font-size: 14px;
    padding: 10px;
    vertical-align: middle;
    border-radius: 4px;
  }
}
.backgroundtop {
  background-color: #00a0d8;
  height: 86px;
  text-align: center;
}
.title {
  width: 980px;
  height: 28px;
  margin: auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 28px;
  text-align: center;
  span {
    font-size: 38px;
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    background: #fff;
  }
}
.form {
  margin: auto;
  width: 410px;
  .text {
    margin: 6px 0;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 10px;
      color: #bbb;
    }
  }
  .btn {
    display: inline-block;
    height: 36px;
    border-radius: 2px;
    width: 184px;
    line-height: 38px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ccc;
    color: #000;
  }
  .login {
    border: 1px solid #0381aa;
    color: #fff;
    background-color: #00a7de;
  }
  .register {
    margin-left: 34px;
  }
}
</style>
<script>
import heade from '@/components/header'
import axios from 'axios'
export default {
  name: 'login',
  components: {
    vHeader: heade,
    username: '',
    password: ''
  },
  methods: {
    login () {
      axios.post('/api/login')
    }
  }
}
</script>
