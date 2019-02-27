<template>
  <article>
    <div class="title">
      <span>注册</span>
    </div>
    <div class="register-center">
      <form action="POST"
            method='register.html'>
        <div class="form-group">
          <input placeholder="昵称"
                 class="el-input_inner"
                 autocomplete="off"
                 name='username'>
          <p class='error-message'>adas</p>
        </div>
        <div class="form-hidden"></div>
        <div class="form-group">
          <input type='password'
                 placeholder="密码(6-16个字符组成，区分大小写)"
                 name='password'
                 maxlength="15"
                 class="el-input_inner">
          <p class='error-message'></p>
        </div>
        <div class="form-hidden"></div>
        <div class="form-group">
          <div class="input-with-select">
            <div class="el-select">
              <div class="el-input">
                <input type="text"
                       name="country"
                       id=""
                       class='el-input_inner'
                       placeholder="请选择国家"
                       readonly='readonly'
                       autocomplete="off">
              </div>
              <span class="el-input_suffix">
                <span class="el-input_suffix-innter">
                  <i></i>
                </span>
              </span>
            </div>
            <input type="text"
                   placeholder="填写常用手机号"
                   maxlength="20"
                   class="el-input_inner">
          </div>
          <p class='error-message'></p>
        </div>
        <div class="form-hidden form-text">
          <router-link to='/registeremail'>用邮箱注册</router-link>
        </div>
        <div class="form-group">
          <input type='text'
                 placeholder='请输入短信验证码'
                 maxlength='4'
                 class="el-input_inner">
          <button class='checkbtn'>点击获取</button>
          <p class='error-message'></p>
        </div>
        <div class="form-hidden">
          <input type='checkbox'>
          <label>我已同意<router-link to='/'>《用户视频使用协议》</router-link></label>
        </div>
        <div class="form-group">
          <input type="submit"
                 value="注册"
                 class='el-input_inner input-btn'>
        </div>

      </form>
    </div>

  </article>
</template>
<style lang="less" scoped>
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
a {
  color: #00a1d6;
}
input {
  outline: none;
}
.register-center {
  width: 980px;
  margin: 0 auto;
  padding: 60px 0;
  .form-group {
    position: relative;
    font-size: 14px;
    width: 420px;
    margin: 0 auto;
    .el-input_inner {
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      width: 100%;
      border: 1px solid #dcdfe6;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      box-sizing: border-box;
      &::-webkit-input-placeholder {
        color: #aaa;
      }
    }
    .checkbtn {
      position: absolute;
      width: 130px;
      height: 36px;
      right: 2px;
      top: 2px;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: #fff;
      background-color: #00a1d6;
      cursor: pointer;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      font-size: 14px;
      border-radius: 4px;
      box-shadow: 0;
      color: #fff;
      border: 1px solid #00a1d6;
    }
    p {
      position: absolute;
      right: -55px;
      bottom: 12px;
    }
    .el-select {
      display: table-cell;
      cursor: pointer;
      position: relative;
      color: #909399;
      vertical-align: middle;
      position: relative;
      padding: 0 20px;
      width: 1px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      .el-input {
        width: 130px;
        display: block;
        .el-input_inner {
          cursor: pointer;
          padding-right: 35px;
          border: none;
          height: 14px;
        }
      }
      .el-input_suffix {
        right: 5px;
        transition: all 0.3s;
        pointer-events: none;
        position: absolute;
        top: 0;
        height: 100%;
        color: #c0c4cc;
        text-align: center;
      }
    }
    .input-btn {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
  }
  .form-hidden {
    width: 420px;
    height: 40px;
    margin: 0 auto;
  }
  .form-text {
    text-align: right;
    line-height: 40px;
  }
  .input-with-select {
    display: inline-table;
    width: 100%;
  }
}
</style>
<script>
export default {
  name: 'register'
}
</script>
