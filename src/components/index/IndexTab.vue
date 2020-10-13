<template>
  <div class="index-tab">
    <div
      class="tab-list"
      v-for="(item, index) in list"
      :key="index"
      @click="change(index, item)"
      :class="{ active: num === index }"
    >
      {{ item.title }}
      <div class="underline" v-if="num === index"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      list: [
        {
          title: "周边短途",
          url: "/short"
        },
        {
          title: "当地玩乐",
          url: "/fun"
        }
      ]
    };
  },
  mounted() {
    this.list.forEach((value, index) => {
      if (value.url == this.$route.path) {
        this.num = index;
      }
    });
  },
  methods: {
    change(index, item) {
      if (item.url !== this.$route.path) {
        this.$router.push(item.url);
        this.num = index;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.index-tab {
  width: 375px;
  height: 353px;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 13px;
  margin-bottom: 8px;
  .tab-list {
    float: left;
    width: 50%;
    height: 44px;
    color: #333333;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #e8e8e8;
    position: relative;
    .underline {
      position: absolute;
      width: 20px;
      height: 3px;
      border-radius: 1.5px;
      background: #e54847;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  .active {
    background-color: #ffffff;
  }
}
</style>
