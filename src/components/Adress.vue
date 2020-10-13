<template>
  <div class="adress">
    <header>
      <img src="../assets/img/xihu.jpg" alt="" />
      <span class="adress-title">
        杭州
      </span>
      <div class="adress-tab">
        切换
        <span><van-icon name="arrow-down"/></span>
      </div>
      <span class="adress-weather">雨 &nbsp; 20℃</span>
    </header>
    <adress-introduce />
    <adress-list />
    <!-- <div class="footer">
      已经到底了哦~~
    </div> -->
  </div>
</template>
<script>
import adressIntroduce from "./adress/AdressIntroduce.vue";
import adressList from "./adress/AdressList.vue";

export default {
  components: {
    adressIntroduce,
    adressList
  }
};
</script>
<style lang="scss" scoped>
.adress {
  background-color: #f8f8f8;
  overflow: hidden;
  header {
    width: 375px;
    height: 265px;
    position: relative;
    color: #ffffff;
    .adress-title {
      position: absolute;
      top: 145px;
      left: 13px;
      font-size: 33px;
    }
    .adress-tab {
      position: absolute;
      top: 151px;
      left: 92px;
      background-color: #ffffff;
      border-radius: 11px;
      font-size: 10px;
      width: 47px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333333;
    }
    .adress-weather {
      position: absolute;
      top: 215px;
      left: 13px;
      font-size: 13px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .footer {
    font-size: 18px;
  }
}
</style>
