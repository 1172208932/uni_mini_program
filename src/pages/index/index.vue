<template>
  <view>
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view v-for="(item, index) in list" :key="index"  @click="goBookInfo(item.Id)">
      <Item :name="item.name" :imageUrl="item.thumImage" />
    </view>
  </view>
</template>

<script lang="ts">
import { get } from "../../utils/http";
import Item from "./components/item/item.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Item,
  },
  data() {
    return {
      title: "Hello",
      list: [],
      finishTag: true,
    };
  },
  mounted() {
    this.getList();
  },
  onReachBottom() {
    console.log("我触发了下拉刷新-----");
    this.getList();
  },
  onLoad() {},
  methods: {
    goBookInfo(id) {
       uni.navigateTo({
        url: `../bookInfo/bookInfo?id=${id}`,
      });
    },
    async getList() {
      if (!this.finishTag) {
        return;
      }
      this.finishTag = false;
      const res: any = await get("/index", {}, {});
      console.log(res, "getList");
      this.finishTag = true;
      if ((res as any).statusCode !== 200) {
        uni.showToast({
          title: "请求错误",
        });
        return;
      }

      const { data } = res;
      this.list = [...this.list, ...data];
    },
  },
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
