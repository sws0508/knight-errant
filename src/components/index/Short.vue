<template>
  <div class="short">
    <van-tabs v-model="active" line-height="0px" title-active-color="yellow">
      <van-tab
        v-for="(item, index) in searchList"
        :key="index"
        :title="item.txt"
      >
        <div v-for="(it, i) in item.next" :key="i" class="short-li">
          <img :src="it.url" alt="" />
          <p>{{ it.content }}</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import img1 from "../../assets/img/1-1.jpg";
import img2 from "../../assets/img/1-2.jpg";
import img3 from "../../assets/img/1.3.jpg";
import img4 from "../../assets/img/1-4.jpg";
import img5 from "../../assets/img/1-5.jpg";
import img6 from "../../assets/img/1-6.jpg";
import img7 from "../../assets/img/2-1.jpg";
import img8 from "../../assets/img/2-2.jpg";
import img9 from "../../assets/img/2-3.jpg";

export default {
  data() {
    return {
      active: 0,
      value: "",
      searchList: [
        {
          txt: "下周活动",
          next: [
            {
              url: img1,
              content: "野攀· 纪龙山",
              pirc: "￥190元起"
            },
            {
              url: img2,
              content: "安吉跳伞",
              pirc: "￥2680元起"
            },
            {
              url: img3,
              content: "东极岛自由行",
              pirc: "￥480元起"
            },
            {
              url: img4,
              content: "浙西吴越古道",
              pirc: "￥160元起"
            },
            {
              url: img5,
              content: "轻装武功山",
              pirc: "￥240元起"
            },
            {
              url: img6,
              content: "徽杭古道传奇",
              pirc: "￥210元起"
            }
          ]
        },
        {
          txt: "海岛度假",
          next: [
            {
              url: img7,
              content: "网红·花屋岛",
              pirc: "￥100元起"
            },
            {
              url: img8,
              content: "海鲜岛",
              pirc: "￥890元起"
            },
            {
              url: img9,
              content: "东极岛",
              pirc: "￥1040元起"
            }
          ]
        },
        {
          txt: "亲子游玩",
          next: [
            {
              url: img1,
              content: "野攀· 纪龙山",
              pirc: "￥190元起"
            },
            {
              url: img2,
              content: "安吉跳伞",
              pirc: "￥2680元起"
            },
            {
              url: img3,
              content: "东极岛自由行",
              pirc: "￥480元起"
            },
            {
              url: img4,
              content: "浙西吴越古道",
              pirc: "￥160元起"
            },
            {
              url: img5,
              content: "轻装武功山",
              pirc: "￥240元起"
            },
            {
              url: img6,
              content: "徽杭古道传奇",
              pirc: "￥210元起"
            }
          ]
        },
        {
          txt: "宝藏小城",
          next: [
            {
              url: img1,
              content: "野攀· 纪龙山",
              pirc: "￥190元起"
            },
            {
              url: img2,
              content: "安吉跳伞",
              pirc: "￥2680元起"
            },
            {
              url: img3,
              content: "东极岛自由行",
              pirc: "￥480元起"
            },
            {
              url: img4,
              content: "浙西吴越古道",
              pirc: "￥160元起"
            },
            {
              url: img5,
              content: "轻装武功山",
              pirc: "￥240元起"
            },
            {
              url: img6,
              content: "徽杭古道传奇",
              pirc: "￥210元起"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.short {
  padding: 50px 9px;
  .van-tab {
    border: 1px solid #cccccc;
  }
  .short-li {
    width: 113px;
    height: 125px;
    color: #333333;
    font-size: 14px;
    float: left;
    margin-left: 4px;
    img {
      width: 100%;
      height: 93px;
      border-radius: 7px;
    }
  }
  // ul {
  //   display: flex;
  //   justify-content: space-around;
  //   width: 100%;
  //   li {
  //     width: 66px;
  //     height: 20px;
  //     background: #ffed99;
  //     border-radius: 10px;
  //     font-size: 12px;
  //     font-family: PingFang;
  //     font-weight: bold;
  //     color: #333333;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     &:first-child {
  //       background: rgba($color: #ffed99, $alpha: 0.2);
  //     }
  //   }
  // }
}
</style>
