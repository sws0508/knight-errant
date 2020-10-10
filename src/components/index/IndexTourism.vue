<template>
  <div class="index-tourism">
    <van-grid :column-num="5">
      <van-grid-item icon="send-gift-o" text="周边游" />
      <van-grid-item icon="point-gift-o" text="国内游" />
      <van-grid-item icon="star-o" text="出镜游" />
      <van-grid-item icon="like-o" text="自由行" />
      <van-grid-item icon="smile-o" text="主题游" />
    </van-grid>
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in list" :key="index">
        <h4>{{ item.title }}</h4>
        <h5>{{ item.text }}</h5>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "亲子游",
          text: "寓教于乐"
        },
        {
          title: "摄影游",
          text: "记录美景"
        },
        {
          title: "户外游",
          text: "勇攀高峰"
        },
        {
          title: "瑜伽行",
          text: "无处不瑜伽"
        },
        {
          title: "小车团",
          text: "臻享经验"
        },
        {
          title: "探索星球",
          text: "全球踩线"
        },
        {
          title: "活动赛事",
          text: "炫酷运动"
        },
        {
          title: "游侠集市",
          text: "旅行必备"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.index-tourism {
  padding-top: 45px;
  width: 375px;
  height: 299px;
  background: #ffffff;
  h4 {
    font-size: 12px;
    color: #333333;
    height: 10px;
  }
  h5 {
    font-size: 10px;
    color: #333333;
    margin-top: 8px;
  }
}
</style>
