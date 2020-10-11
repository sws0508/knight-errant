<template>
  <div class="index">
    <header>
      <div class="index-wrap">
        <div class="index-adress" @click="toCity">
          {{ changeCity }}
          <span><van-icon name="arrow-down"/></span>
        </div>
        <div class="index-search">
          <div class="iconWrap">
            <van-icon name="search" />
          </div>
          <input type="text" placeholder="探索全球小众目的地和创意玩法" />
        </div>
        <van-icon name="enlarge" />
      </div>
      <ul>
        <li v-for="(item, index) in searchList" :key="index">
          {{ item }}
        </li>
      </ul>
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </van-swipe>
    </header>
    <index-tourism />
    <index-tab />
  </div>
</template>
<script>
import indexTourism from "./index/IndexTourism.vue";
import indexTab from "./index/IndexTab.vue";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/02.jpg";
import img3 from "../assets/img/03.jpg";
import img4 from "../assets/img/04.jpg";
import img5 from "../assets/img/05.jpg";

export default {
  data() {
    return {
      value: "",
      searchList: ["热搜", "武功山", "腾格里", "秦晋", "赛里木湖"],
      bannerList: [
        {
          url: img1,
          id: 1
        },
        {
          url: img2,
          id: 2
        },
        {
          url: img3,
          id: 3
        },
        {
          url: img4,
          id: 4
        },
        {
          url: img5,
          id: 5
        }
      ]
    };
  },
  components: {
    indexTourism,
    indexTab
  },
  methods: {
    toCity() {
      this.$router.push("/City");
    }
  },
  computed: {
    changeCity() {
      return this.$store.state.city.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  background-color: #f2f2f2;
  header {
    width: 100%;
    height: 236px;
    background-color: #fed201;
    padding-top: 14px;
    position: relative;
    .index-wrap {
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .index-adress {
        width: 45px;
        height: 14px;
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        color: #333333;
        display: flex;
      }
      .index-search {
        width: 224px;
        height: 32px;
        background: #ffffff;
        border-radius: 16px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .van-icon-search::before {
          font-size: 20px;
        }
        input {
          width: 175px;
          height: 20px;
          border: none;
        }
      }
    }
    ul {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 18px;
      li {
        width: 66px;
        height: 20px;
        background: #ffed99;
        border-radius: 10px;
        font-size: 12px;
        font-family: PingFang;
        font-weight: bold;
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        &:first-child {
          background: rgba($color: #ffed99, $alpha: 0.2);
        }
      }
    }
    .van-swipe {
      width: 348px;
      height: 177px;
      position: absolute;
      top: 104px;
      left: 13px;
      border-radius: 7px;
      .van-swipe-item {
        width: 348px;
        height: 177px;
        border-radius: 7px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
