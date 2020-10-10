<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      :placeholder="true"
      :route="true"
      active-color="orange"
    >
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/adress">杭州</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/meet">遇见</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/community">社区</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
