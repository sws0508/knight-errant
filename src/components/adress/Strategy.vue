<template>
  <div class="strategy">
    <li v-for="(item, index) in list" :key="index">
      <div class="strategy-wrap">
        <p>{{ item.txt }}</p>
        <span>{{ item.content }}再看</span>
      </div>
      <img :src="item.url" alt="" />
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          txt: "江浙沪旅游去哪儿好？盘点周末值得去的20条户外线路",
          url: "https://qimg4.youxiake.com/upload/202006/11/96201591866645.jpg",
          content: "20.38万"
        },
        {
          txt: "亲子旅游去哪儿好？国内十大亲子游目的地推荐，带上孩子出发吧！",
          url: "https://qimg4.youxiake.com/upload/202003/30/52181585557536.jpg",
          content: "33.32万"
        },
        {
          txt: "云游杭州余杭，被忽视的余杭景色到底有多美？",
          url: "https://qimg4.youxiake.com/upload/202003/11/90821583910731.jpg",
          content: "25.12万"
        },
        {
          txt: "亲测杭州小众赏樱地，待到山花烂漫时，一起去看樱花吧",
          url: "https://qimg4.youxiake.com/upload/202002/05/38951580876851.jpg",
          content: "15.6万"
        },
        {
          txt: "江浙沪旅游去哪儿好？盘点周末值得去的20条户外线路",
          url: "https://img3.youxiake.com/o_1dv3qja0b2eucunl8u1omssiub7.jpg",
          content: "44.6万"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.strategy {
  padding: 0px 5px;
  li {
    width: 100%;
    height: 113px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 0px;
    .strategy-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    img {
      width: 121px;
      height: 83px;
      margin-left: 8px;
    }
  }
}
</style>
