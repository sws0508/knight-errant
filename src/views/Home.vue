<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active"  :placeholder="true" active-color="orange">
      <van-tabbar-item
        :icon="item.i"
        :to="item.path"
        v-for="(item, index) in list"
        :key="index"
        @click="Change(index)"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: +sessionStorage.getItem("activeIndex") || 0,
      list: [
        {
          i: "wap-home-o",
          title: "首页",
          path: "/index"
        },
        {
          i: "contact",
          title: "杭州",
          path: "/adress"
        },
        {
          i: "friends-o",
          title: "遇见",
          path: "/meet"
        },
        {
          i: "wap-home-o",
          title: "社区",
          path: "/community"
        },
        {
          i: "wap-home-o",
          title: "我的",
          path: "/mine"
        }
      ]
    };
  },
  methods:{
    Change(index){
      sessionStorage.setItem("activeIndex",index)
    }
  }
};
</script>
