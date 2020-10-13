<template>
  <div class="adress-list">
    <van-tabs v-model="active">
      <van-tab
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :to="item.url"
      >
      </van-tab>
      <router-view></router-view>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          title: "预定",
          url: "/adress/reservation"
        },
        {
          title: "旅途",
          url: "/adress/tourism"
        },
        {
          title: "攻略",
          url: "/adress/strategy"
        },
        {
          title: "游记",
          url: "/adress/travel"
        },
        {
          title: "视频",
          url: "/adress/video"
        }
      ]
    };
  },
  mounted() {
    this.list.forEach((value, index) => {
      if (value.url == this.$route.path) {
        this.active = index;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.adress-list {
  width: 375px;
  background: #ffffff;
  margin-top: 14px;
}
</style>
