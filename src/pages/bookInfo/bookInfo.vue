<template>
  <view>
    <swiper indicator-dots autoplay circular class="swiper-content">
      <swiper-item v-for="(item, index) in info.bigImage" :key="index">
        <image class="image-content" :src="item" mode="scaleToFill" />
      </swiper-item>
    </swiper>
	<van-goods-action>
		<van-goods-action-icon icon="chat-o" text="客服" />
		<van-goods-action-icon icon="cart-o" text="购物车" :info="count" />
		<van-goods-action-icon icon="shop-o" text="店铺" />
		<van-goods-action-button color="#be99ff" text="加入购物车" type="warning" @click="changeCount" />
		<van-goods-action-button color="#7232dd" text="立即购买" @click="goBuyPage" />
	</van-goods-action>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import { get } from "../../utils/http";
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed:{
    ...mapState({
      count: state => (state as any).count
    })
  },
  data() {
    return {
      title: "my",
      info: {},
	  id:'',
	  shopCarLeb:0
    };
  },
  onLoad(e) {
    console.log(e, "e");
	this.id = e.id || '';
    this.getShopinfoById(e.id); 
	this.getShopCarLen()
  },
  methods: {
    ...mapMutations(['changeCount']),
	  goBuyPage(){
      uni.navigateTo({
        url: `../buyPage/buyPage`,
      });
	  },
	async getShopCarLen(){
      const res = await get("/shopCarLen", { }, {});
	  if ((res as any).statusCode !== 200) {
			uni.showToast({
			title: "请求错误",
			});
			return;
		}
		this.shopCarLeb = (res as any).data

	},


	async addShopToCar(id){
		const res = await get("/addShopToCar",{Id:this.id},{})
			  if ((res as any).statusCode !== 200) {
			uni.showToast({
			title: "请求错误",
			});
			return;
		}
		this.shopCarLeb += 1
	},


    async getShopinfoById(id) {
      const res = await get("/getShopinfoById", { id }, {});
      console.log(res);
      if ((res as any).statusCode !== 200) {
        uni.showToast({
          title: "请求错误",
        });
        return;
      }

      this.info = Object.assign({}, this.info, (res as any).data);
    },
  },
});
</script>

<style scoped>
.swiper-content {
  height: calc(50vh);
  background-color: bisque;
}
.image-content{
	display: block;
	margin: 0 auto;
	height: calc(50vh);
}
</style>
