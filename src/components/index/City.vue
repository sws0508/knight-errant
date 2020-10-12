<template>
  <div>
    <div class="topcity" v-if="getList.length">
      <li
        v-for="(item, index) in getList[0].cities"
        :key="index"
        @click="handle(item)"
      >
        {{ item.name }}
      </li>
    </div>
    <van-index-bar :index-list="indexList">
      <div v-for="(item, index) in getList" :key="index">
        <template v-if="item.prefix != 'hotCities'">
          <van-index-anchor :index="item.prefix | toUpperCase()" />
          <van-cell
            :title="it.name"
            v-for="(it, i) in item.cities"
            :key="i"
            @click="handle(it)"
          />
        </template>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      getList: []
    };
  },
  computed: {
    indexList() {
      let arr = [];
      for (let i = 0; i < this.getList.length; i++) {
        arr.push(this.getList[i].prefix.toUpperCase());
      }
      return arr;
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  mounted() {
    this.getCity();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getCity() {
      axios
        .get("http://www.pudge.wang:3002/api/cities/list")
        .then(response => {
          this.getList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handle(it) {
      this.$store.commit("changeCity", it);
      this.$router.push("/index");
    }
  }
};
</script>
<style lang="scss" scoped>
.topcity {
  width: 358px;
  height: 200px;
  background-color: white;
  li {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10px;
  }
}
</style>
