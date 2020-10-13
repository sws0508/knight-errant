<template>
  <div class="adress-introduce">
    <div class="adress-title">
      杭州之美，除了集江南神韵于一身的西湖十景人文
      景观同样丰富多彩，素体春晓、平湖秋月、灵隐...
    </div>

    <div class="adress-wrap">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <h4>{{ item.title }}</h4>
          <h5>{{ item.text }}</h5>
        </li>
      </ul>
    </div>

    <van-tabs v-model="active" title-active-color="#ffe65a" line-height="0px">
      <van-tab
        :title="item.txt"
        v-for="(item, index) in adressList"
        :key="index"
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
import img1 from "../../assets/img/xihu.png";
import img2 from "../../assets/img/lingyinsi.png";
import img3 from "../../assets/img/leifengta.png";
import img4 from "../../assets/img/xixishidi.png";

export default {
  data() {
    return {
      active: 0,
      adressList: [
        {
          txt: "热门景点",
          next: [
            {
              url: img1,
              content: "西湖"
            },
            {
              url: img2,
              content: "灵隐寺"
            },
            {
              url: img3,
              content: "雷峰塔"
            }
          ]
        },
        {
          txt: "附近景点",
          next: [
            {
              url: img2,
              content: "灵隐寺"
            },
            {
              url: img4,
              content: "西溪湿地"
            }
          ]
        }
      ],
      list: [
        {
          title: "最佳季节",
          text: "9-11月：天气秋高气 爽，满陇桂雨的桂..."
        },
        {
          title: "建议游玩",
          text: "西湖以一山、二塔、 三岛、三堤、五湖..."
        },
        {
          title: "消费水平",
          text: "杭州的消费水平与北 京、上海等国内..."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.adress-introduce {
  width: 100%;
  height: 283px;
  padding: 10px 20px;
  background-color: #ffffff;
  .adress-title {
    width: 310px;
    height: 27px;
    font-size: 14px;
    color: #333333;
    margin-bottom: 13px;
  }
  .short-li {
    float: left;
    width: 100px;
    height: 63px;
    margin-left: 4px;
    font-size: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
  }
  .adress-wrap {
    overflow: auto;
    margin-bottom: 13px;
    ul {
      width: 450px;
      div {
        float: left;
      }
      li {
        width: 140px;
        height: 65px;
        float: left;
        margin-left: 6px;
        background: #f8f9f4;
        border-radius: 7px;
        font-size: 11px;
        padding: 10px;
        h5 {
          margin-top: 9px;
        }
      }
    }
  }
}
</style>
