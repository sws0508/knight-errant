<template>
  <div class="meet-list">
    <van-tabs v-model="active"
      background="#ffdc40"
      title-inactive-color="#333333"
      line-width="20px"
      >
      <van-tab
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :to="item.url"
      >
      </van-tab>
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
          title: "关注",
          url: "/meet/focus"
        },
        {
          title: "发现",
          url: "/meet/found"
        },
        {
          title: "精选",
          url: "/meet/select"
        },
        {
          title: "短视频",
          url: "/meet/mine-video"
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
.meet-list {
  width: 375px;
  background: #ffdc40;
  margin-top: 14px;
  color: #333333;
  font-size: 17px;
  padding: 0px 16px;
}
</style>
