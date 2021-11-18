<template>
  <view>
    <view v-for="(item, index) in list" :key="index">
      <van-card :num="item.count" :title="item.info.name" desc="miaoshu" :price="item.info.rmb" :thumb="item.info.thumImage" ></van-card>
    </view>
  </view>
</template>

<script lang="ts">
import { get } from "../../utils/http";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      list: [],
      finishTag: true,
    };
  },
  mounted() {
    this.getBuyInfo();
  },

  onLoad() {},
  methods: {
    async getBuyInfo() {
      const res = await get("/buyInfo", {}, {});
      console.log(res, "ressssss");
      if ((res as any).statusCode !== 200) {
        uni.showToast({
          title: "请求错误",
        });
        return;
      }
      this.list = (res as any).data;
    },
  },
});
</script>

<style>
</style>
