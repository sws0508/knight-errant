<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active" :placeholder="true" active-color="orange">
      <van-tabbar-item
        :icon="item.i"
        :to="item.path"
        v-for="(item, index) in list"
        :key="index"
        @click="change(index)"
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
  mounted() {
    // this.list.forEach((value, index) => {
    //   if (value.path == this.$route.path) {
    //     this.active = index;
    //   }
    //   if (this.$route.path.indexOf("adress") != -1) {
    //     this.active = 1;
    //   }
    //   if (this.$route.path.indexOf("meet") != -1) {
    //     this.active = 2;
    //   }
    // });
  },
  methods: {
    change(index){
      sessionStorage.setItem("activeIndex",index)
    }
  },
};
</script>
