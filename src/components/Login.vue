<template>
  <div style="padding-top: 200px">
    <van-field
      v-model="phone"
      center
      clearable
      label="手机号"
      placeholder="请输入手机号"
    >
      <template #button>
        <van-button size="small" type="primary" @click="send">
          发送验证码
        </van-button>
      </template>
    </van-field>

    <van-field v-model="code" label="验证码" placeholder="请输入手机验证码" />

    <van-button type="primary" size="normal" block @click="login">
      一键注册/登录
    </van-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      phone: "",
      code: "",
      list: null
    };
  },
  watch: {
    list() {
      if (sessionStorage.getItem("token")) {
        this.$router.push("/mine");
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
