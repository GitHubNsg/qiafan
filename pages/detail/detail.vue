<template>
	<view>


		<swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<image :style="'background-image: url('+item+');'" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<view class="flex menu">

			<text class="content">{{goods.name}}</text>
		</view>
		<view class="flex menu text-red margin-tb-sm">

			<text class="content text-price "> {{goods.price_selling}}</text>
		</view>
		<view class="flex menu text-red margin-tb-sm">

			<text class="content   "> 销量 {{goods.stock_sales}}</text>
		</view>


		<view class="bottom-fix-no">
			<!-- <view class="solid-bottom bottom-fix" style="[{margin-bottom:StatusBar + 'px'}]"> -->
			<view class="cu-bar bg-white tabbar border shop">
				<button class="action" open-type="contact">
					<view class="cuIcon-service text-green">
					</view>
					客服
				</button>
				<view class="action">
					<view class="cuIcon-cart">
					</view>
					购物车
				</view>
				<view class="bg-orange submit">加入购物车</view>
				<view class="bg-red submit" @click="sku_key = true">立即订购</view>
			</view>
		</view>
		<vk-u-goods-sku-popup
		 v-model="sku_key"
		  :custom-action="findGoodsInfo" :mode="3" border-radius="20" @add-cart="addCart"
		 @buy-now="buyNow"></vk-u-goods-sku-popup>

	</view>

</template>
<script>
	var that;
	export default {
		data() {
			return {
				banner: [],
				goods: {},
				sku_key:false,
			};
		},
		onLoad(option) {

			var id = option.id;
			this.goods = JSON.parse(id);
			console.log(this.goods);
			this.banner = this.goods.slider;
			that=this;

		},
		mounted() {
			that = this;
			 
		},
		methods: {
			 
			// 加入购物车前的判断
			addCartFn(obj) {
				let {
					selectShop
				} = obj;
				// 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
				let res = {};
				let name = selectShop.goods_name;
				if (selectShop.sku_name != "默认") {
					name += "-" + selectShop.sku_name;
				}
				res.msg = `$ {name}已添加到购物车`;
				if (typeof obj.success == "function") obj.success(res);
			},
			// 加入购物车按钮
			addCart(selectShop) {
				console.log("监听 - 加入购物车");
				that.addCartFn({
					selectShop: selectShop,
					success: function(res) {
						// 实际业务时,请替换自己的加入购物车逻辑
						that.toast(res.msg);
					}
				});
			},
			// 立即购买
			buyNow(selectShop) {
				console.log("监听 - 立即购买");
				
				var data=selectShop.goods_code
				+"@"+selectShop.goods_spec
				+"@"+selectShop.buy_num;
				
				this.$net.fetch(function(ret){
					
					that.$router.push({path:'../order/pay?id='+JSON.stringify(ret)})
					
				},this.$net.addOrder,{'items':data},'post');
			 
			 // 
			 
			},
			/**
			 * 获取商品信息
			 * 这里可以看到每次打开SKU都会去重新请求商品信息,为的是每次打开SKU组件可以实时看到剩余库存
			 */
			findGoodsInfo() {
				var thus=this;
				return new Promise(function(resolve, reject) {
					resolve(thus.goods);
					
					// 这里是获取商品信息的后端请求,可以用你自己的方式请求获取,本例子中用的是unicloud的云函数获取商品信息
					 
				});
			},
			toast(msg) {
				uni.showToast({
					title: msg,
					icon: "none"
				});
			},
			callFunction(obj) {
				uni.showLoading({
					title: '请求中'
				});
				uniCloud.callFunction({
					name: 'findGoodsInfo',
					data: {
						goods_id: that.goods_id
					},
					success(res) {
						console.log(res);
						if (typeof obj.success == "function") obj.success(res.result);
					},
					fail(err) {
						console.error(err);
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
		}
	};
</script>
<style>
	.page {
		height: 100vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}
</style>
