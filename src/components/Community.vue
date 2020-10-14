<template>
  <div class="community">
    <div class="search">
      <van-icon name="search" />
      <input type="text" placeholder="请输入搜索关键词">
    </div>
    <main>
      <div class="nav">
        <div class="nav_item">
          <span>目的地</span>
          <img src="../assets/img/c (2).png" alt="">
        </div>
        <div class="nav_item">
          <span>游记</span>
          <img src="../assets/img/c (6).png" alt="">
        </div>
        <div class="nav_item">
          <span>攻略</span>
          <img src="../assets/img/c (7).png" alt="">
        </div>
        <div class="nav_item">
          <span>摄影</span>
          <img src="../assets/img/c (2).png" alt="">
        </div>
        <div class="nav_item">
          <span>视频</span>
          <img src="../assets/img/c (1).png" alt="">
        </div>
      </div>

      <div class="banner">
        <div class="title">侠魁日历</div>
        <div class="imgBox">
          <img class="img1" src="../assets/img/c (4).png" alt="">
          <img class="img2" src="../assets/img/c (5).png" alt="">
          <img class="img3" src="../assets/img/c (3).png" alt="">
          <div class="beifang">
            <p>疫情过去了，我们去旅行吧！（北方）</p>
            <div>
              <i></i>
              <span>空行僧 在北京</span>
            </div>
          </div>
        </div>
      </div>

      <div class="more">
        <div class="more_title">更多</div>
        <div class="more_body">
          <ul class="more_list">
            <li class="list_item" v-for="(item,index) in moreList" :key="index">
              <div class="item_left">
                <p>{{item.title}}</p>
              </div>
              <div class="item_right">
                <img src="../assets/img/c (5).png" alt="">
                <p>
                  <span>
                    <img src="../assets/img/mine (14).png" alt="">
                    <i>{{item.code}}</i>
                  </span>
                  <span>
                    <img src="../assets/img/mine (14).png" alt="">
                    <i>{{item.meg}}</i>
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
 </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
      moreList:[
        {
          title:"北海涠洲岛该怎么 玩？跟着攻略玩转中 国最年轻的火山岛~",
          code:9413,
          meg:3
        },
        {
          title:"来贵州一定要打卡的 知名景点-亚洲最大 的瀑布：黄果树...",
          code:1813,
          meg:3
        },
        {
          title:"杭州夏日建筑风景记 实",
          code:1048,
          meg:21
        },
        {
          title:"纪念平凡生活中的那 些高光时刻 | 2019年 终总结",
          code:1859,
          meg:39
        },
        {
          title:"生活不是为了赶路 而 是为了感受路--武功 山",
          code:3684,
          meg:54
        }
      ],
      value: '',
    }
  },
  props: {

  },
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style lang="scss" scoped>
.community {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #b5b5b5;
}
.search{
  display: inline-flex;
  margin: 20px auto;
  margin-left: 60px;
  padding: 10px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 6px;
  justify-content: center;
  input{
    border: none;
    width: 200px;
    margin-left: 10px;
  }
}
main{
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
  .nav{
    display: flex;
    justify-content: space-around;
    margin-top: 23px;
    .nav_item{
      width: 64px;
      height: 64px;
      border: 1px solid gray;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      span{
        color: #333;
        font-size: 14px;
      }
      img{
        position: absolute;
        width: 16px;
        right: 8px;
        bottom: 3px;
      }
    }
  }
}

.banner{
  height: 375px;
  .title{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    font-size: 19px;
    font-family: PingFang;
    font-weight: bold;
    font-style: italic;
    color: #333333;
  }
  .imgBox{
    position: relative;
    display: flex;
    justify-content: center;
    // width: 350px;
    
    .img1{
      width: 255px;
      height: 226px;
    }
    .img2{
      position: absolute;
      top: 7px;
      width: 302px;
      height: 256px;
      border-radius: 6px;
    }
    .img3{
      position: absolute;
      top: 16px;
      width: 350px;
      height: 286px;
    }
    .beifang{
      position: absolute;
      top: 253px;
      width: 350px;
      font-size: 20px;
      font-family: PingFang;
      font-weight: bold;
      color: #333333;
      background: #fff;
      p{
        padding: 6px 0;
      }
      div{
        display: flex;
        align-items: center;
        i{
          width: 26px;
          height: 26px;
          margin-right: 5px;
          background: #B5B5B5;
          border-radius: 50%;
        }
        span{
          font-size: 15px;
          font-family: PingFang;
          font-weight: bold;
          color: #818181;
        }
      }
    }
    
  }
}

.more{
  margin-top: 40px;
  height: 400px;
  // display: flex;
  // justify-content: center;
  .more_title{
    width: 91px;
    height: 35px;
    background: #F5F5F5;
    border: 0px solid #B5B5B5;
    border-radius: 17px;
    font-size: 13px;
    font-family: PingFang;
    font-weight: bold;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .more_body{
    .more_list{
      .list_item{
        display: flex;
        width: 345px;
        // padding: 0 15px;
        // height: 175px;
        // background: pink;
        margin: 0 auto;
        padding: 15px 0;
        justify-content: space-between;
        border-bottom: 2px solid #E8E8E8;
        .item_left{
          padding-top: 10px;
          width: 168px;
          font-size: 19px;
          font-family: PingFang;
          font-weight: bold;
          color: #333333;
          line-height: 27px;
        }
        .item_right{
          width: 156px;
          img{
            width: 100%;
          }
          p{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 15px;
            line-height: 15px;
            span{
              margin-left: 40px;
              img{
                width: 12px;
                height: 9px;
              }
              i{
                margin-left: 5px;
                font-size: 13px;
                font-family: PingFang;
                font-weight: bold;
                color: #818181;
              }
            }
          }
        }
      }
    }
  }
}
</style>
