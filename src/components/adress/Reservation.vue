<template>
  <div class="reservation">
    <van-tabs
      v-model="active"
      line-height="0px"
      title-active-color="#333333"
      title-inactive-color="c2c2c2"
    >
      <van-tab
        v-for="(item, index) in searchList"
        :key="index"
        :title="item.txt"
      >
        <div v-for="(it, i) in item.next" :key="i" class="short-li">
          <img :src="it.url" alt="" />
          <h4>{{ it.txt }}</h4>
          <p>{{ it.content }}</p>
          <span>{{ it.pirc }}</span>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import img1 from "../../assets/img/adress-1.png";
import img2 from "../../assets/img/adress-2.png";
import img3 from "../../assets/img/adress-3.png";
import img4 from "../../assets/img/adress-4.png";
import img5 from "../../assets/img/adress-5.png";
import img6 from "../../assets/img/adress-6.png";
import img7 from "../../assets/img/adress-7.png";
import img8 from "../../assets/img/adress-8.png";

export default {
  data() {
    return {
      active: 0,
      value: "",
      searchList: [
        {
          txt: "当地玩乐",
          next: [
            {
              url: img1,
              content: "[游侠写真-复古]《复 古时光》复古风格...",
              txt: "当地玩乐·写真旅拍·1天",
              pirc: "￥598元起"
            },
            {
              url: img2,
              content: "[小清新写真-和服少 女]《和服少女》",
              txt: "当地玩乐·写真旅拍·1天",
              pirc: "￥520元起"
            }
          ]
        },
        {
          txt: "主题玩法",
          next: [
            {
              url: img3,
              content: "[宋城景区+宋城千古情演出]给我一天还...",
              pirc: "￥320元起"
            },
            {
              url: img4,
              content: "[探索杭州·龙井问茶]杭城City Walk...",
              pirc: "￥158元起"
            },
            {
              url: img5,
              content: "[自驾·玩转西溪]夏日邀约，择良辰和宝贝...",
              pirc: "￥350元起"
            }
          ]
        },
        {
          txt: "自由行",
          next: [
            {
              url: img6,
              content: "[探索杭州·三竺禅修]杭城City Walk...",
              pirc: "￥98元起"
            },
            {
              url: img7,
              content: "[杭州运河夜游船票]京杭大运河夜游漕...）",
              pirc: "￥480元起"
            },
            {
              url: img5,
              content: "[自驾·玩转西溪]夏日邀约，择良辰和宝贝...",
              pirc: "￥350元起"
            }
          ]
        },
        {
          txt: "同城",
          next: [
            {
              url: img2,
              content: "[小清新写真-和服少 女]《和服少女》",
              txt: "当地玩乐·写真旅拍·1天",
              pirc: "￥520元起"
            },
            {
              url: img8,
              content: "[丽水全景摄影]2020全年南尖岩云海-...",
              pirc: "￥1880元起"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.reservation {
  padding: 0px 5px;
  .van-tab {
    border: 1px solid #cccccc;
  }
  .short-li {
    width: 170px;
    height: 225px;
    color: #333333;
    background: #f6f6f6;
    font-size: 14px;
    float: left;
    margin-left: 8px;
    margin-top: 10px;
    img {
      width: 100%;
      height: 115px;
      border-radius: 7px;
    }
  }
}
</style>
