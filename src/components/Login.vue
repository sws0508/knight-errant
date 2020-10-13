<template>
  <div class="login">
    <header>
      <div class="login-wrap">
        <img src="../assets/img/log.png" alt="" />
      </div>
      <h4>手机号注册/登录</h4>
      <van-field
        v-model="phone"
        center
        clearable
        placeholder="请输入手机号"
        type="number"
      >
      </van-field>
      <van-field v-model="code" placeholder="请输入手机验证码">
        <template #button>
          <van-button
            size="small"
            type="default"
            @click="send"
          >
            发送验证码
          </van-button>
        </template>
      </van-field>
      <van-button
        type="primary"
        size="normal"
        block
        @click="login"
        color="pink"
        :class="{ active :disabled}"
      >
        一键注册/登录
      </van-button>
      <ul>
        <li>非大陆手机号登录</li>
        <li>账号密码登录</li>
      </ul>
    </header>
    <footer>
      <span>
        未注册游侠客账号的手机，登录时将同时注册，登录代表您已同意
      </span>
      <div class="login-bottom">
        体验游侠客微信小程序
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      phone: "",
      code: "",
      list: null,
      disabled: false
    };
  },
  watch: {
    list() {
      if (sessionStorage.getItem("token")) {
        this.$router.push("/mine");
      }
    },
    phone() {
      if (this.phone !=""){
        this.disabled = true
      } else {
        this.disabled =! true
      }
    }
  },
  methods: {
    send() {
      axios
        .post("http://www.pudge.wang:3001/register/getCode", {
          phone: this.phone,
          templateId: "537707"
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    login() {
      axios
        .post("http://www.pudge.wang:3001/register", {
          phone: this.phone,
          code: this.code
        })
        .then(response => {
          this.list = response.data;
          if (this.list.status == "0") {
            sessionStorage.setItem("token", this.list.result.token);
          }
          console.log(this.list);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.active {
  background:orange !important
}
.login {
  padding: 15px 20px;
  position: relative;
  header {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .login-wrap {
      width: 55px;
      height: 55px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
    h4 {
      font-family: PingFang SC;
      font-weight: 800;
      color: #333;
      font-size: 16px;
      height: .45rem;
      display: block;
      margin: 15px 0;
    }
    ul {
      font-size: 12px;
      padding: 0px 15px;
      color: #333;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
  footer {
    width: 100%;
    font-size: 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    .login-bottom {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ecc927;
      border-top: 1px #ccc solid;
    }
  }
}
</style>
