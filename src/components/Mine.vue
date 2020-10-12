<template>
  <div class="mine">
    <!-- mine_header -->
    <div class="mine_header">
      <!-- top_icon -->
      <div class="top_icon">
        <van-icon name="setting-o" />
        <van-icon name="chat-o" />
      </div>
      <!-- 用户登录 -->
      <div class="user">
        <img src="../assets/img/mine.png">
        <span>点击登录/注册</span>
      </div>
      <!-- record -->
      <div class="record">
        <ul>
          <li>
            <i>0</i>
            <span>收藏</span>
          </li>
          <li>
            <i>0</i>
            <span>浏览</span>
          </li>
          <li>
            <i>0</i>
            <span>动态</span>
          </li>
          <li class="sign">
            <img src="../assets/img/mine (11).png" alt="">
            <span>每日签到</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- mine_order -->
    <div class="mine_order">
      <div class="order_header">
        <div class="hd_left">出行订单</div>
        <div class="he_right">
          <span>查看全部</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <ul class="order_content order_and_serve">
        <li v-for="(item,index) in 5" :key="index">
          <img src="../assets/img/mine (13).png">
          <span>待付款</span>
        </li>
      </ul>
    </div>
    <!-- mine_banner -->
    <div class="mine_banner">
      <img src="../assets/img/mine (6).png" alt="">
    </div>
    <!-- mine_serve -->
    <div class="mine_serve">
      <div class="serve_header">我的服务</div>
      <ul class="serve_content order_and_serve">
        <li v-for="(item,index) in 8" :key="index">
          <img src="../assets/img/mine (8).png">
          <span>待付款</span>
        </li>
      </ul>
    </div>
    <!-- mine_recommend -->
    <div class="mine_recommend">
      <div class="recommend_header">精选推荐</div>
      <ul class="recommend_content">
        <li v-for="(item,index) in 10" :key="index">
          <img src="../assets/img/list01.jpg" alt="">
          <div class="info">
            <p class="title">[田园靖西]2020全年 计划：南宁-通灵</p>
            <p class="group">跟团游·美景探索·4天3晚</p>
            <p class="price">¥ 1450起</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      recommendList:[],
    }
  },
  mounted(){
    // this.$store.dispatch("getRecommends")
    this.getls();
  },
  methods:{
    getls(){
      axios.get('/api/lines/userrecommends')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

}
</script>

<style lang="scss" scoped>
.mine {
  background: #f2f2f2;
}
.mine_header {
  height: 209px;
  background: #ffdf35;
  .top_icon {
    padding-top: 58px;
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    .van-icon {
      width: 20px;
      height: 21px;
      margin-left: 33px;
    }
  }
  .user {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 21px;
    img {
      width: 44px;
      margin: 0 10px;
    }
    span {
      font-size: 24px;
    }
  }
  .record {
    ul {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          font-size: 17px;
        }
        span {
          font-size: 14px;
          margin-top: 5px;
        }
      }
      .sign {
        img {
          width: 26px;
          height: 20px;
        }
      }
    }
    
  }
  
}
.mine_order {
  width: 355px;
  height: 118px;
  margin: 10px auto;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .order_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 10px;
    .hd_left {
      font-size: 17px;
      color: #343434;
      font-weight: 700;
    }
    .he_right {
      font-size: 14px;
      color: #BEBEBE;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .van-icon {
        font-size: 14px;
        color: #BEBEBE;
      }
    }
  }
}
// .order_content &&  .serve_content -->公共样式
.order_and_serve {
  display: flex;
  // justify-content: space-between;
  padding: 13px 15px;
  padding-top: 0;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65px;
    margin: 11px 0;
    img {
      width: 32px;
    }
    span {
      margin-top: 13px;
      font-size: 14px;
      color: #343434;
    }
  }
}
.mine_banner {
  width: 355px;
  height: 58px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.mine_serve {
  width: 355px;
  // height: 180px;
  margin: 10px auto;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .serve_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 10px;
    font-size: 17px;
    color: #343434;
    font-weight: 700;
    
  }
  .serve_content {
    li {
      span {
        font-size: 12px !important;
      }
    }
    
  }
}
.mine_recommend {
  // width: 355px;
  // margin: 0 auto;
  .recommend_header{
    margin: 27px 0;
    display: flex;
    justify-content: center;
    font-size: 17px;
    color: #343434;
    font-weight: 700;
  }
  .recommend_content {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 172px;
      background: #FFF;
      margin-left: 10px;
      margin-bottom: 14px;
      img {
        width: 172px;
        height: 130px;
      }
      .info {
        width: 152px;
        margin: 0 auto;
        padding: 15px 0;
        .title {
          font-size: 17px;
          color: #343434;
          font-weight: SC-Bold;
        }
        .group {
          font-size: 13px;
          color: #9B9B9B;
          margin-top: 8px;
        }
        .price {
          font-size: 16px;
          color: #ED6E21;
          margin-top: 10px;
          font-weight: bold;
        }
      }
    }
    
  }
  
}

</style>


