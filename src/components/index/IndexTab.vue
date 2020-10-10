<template>
  <div>
    <li v-for="(item, index) in list" :key="index" @click="change(index)">
      {{ item }}
      <div v-if="index == num">123</div>
    </li>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      list: ["周边短途", "当地玩乐"]
    };
  },
  methods: {
    change(index) {
      console.log(index)
      this.num = index;
    }
  }
};
</script>
