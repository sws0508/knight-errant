<template>
  <div class="meet">
    <header>
      <div class="index-search">
        <div class="iconWrap">
          <van-icon name="search" />
        </div>
        <input type="text" placeholder="探索全球小众目的地和创意玩法" />
      </div>
      <meet-list />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import meetList from "./meet/MeetList";

export default {
  components: {
    meetList
  }
}
</script>
<style lang="scss" scoped>
.meet {
  header {
    width: 100%;
    height: 99px;
    background-color: #ffdc40;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .index-search {
      width: 314px;
      height: 32px;
      background: #ffffff;
      border-radius: 16px;
      display: flex;
      margin-top: 16px;
      justify-content: space-around;
      align-items: center;
      .van-icon-search::before {
        font-size: 20px;
      }
      input {
        width: 275px;
        height: 20px;
        border: none;
      }
    }
  }
}
</style>
