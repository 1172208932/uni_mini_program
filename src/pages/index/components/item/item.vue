<template>
  <view class="item-content">
    <image :src="imageUrl" class="item-photo"></image>
    <view class="item-box">
      <text class="item-t1">{{ name }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: "默认名称",
    },
    imageUrl: {
      type: String,
      default: "../../../../static/logo.png",
    },
  },
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style scoped>
.item-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  height: 200px;
  background-color: red;
  padding: 5px;
}
.item-photo {
  width: 50%;
  height: 179px;
}
.item-box {
  width: 50%;
}
.item-t1 {
  width: 200px;
  height: 20px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
