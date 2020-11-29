<template>
	<view class="container">
		<view>
			<view class="cu-list menu">
				<view class="cu-item  text-center align-center" v-if="address.code == undefined">
					<navigator class="content" url="../address/address" hover-class="none">
						<text class="cuIcon-add text-gray"></text>
						<text class="text-black">收货地址</text>
					</navigator>
				</view>

				<view class="cu-item   content margin-top-sm" v-if="address.id > 0">
					<navigator url="../address/address">
						<view class="padding-xs">
							<text>{{ address.name }}-{{ address.phone }}</text>
						</view>
						<view class="padding-xs">
							<text>{{ address.province }}-{{ address.area }}-{{ address.city }}-{{ address.address }}</text>
						</view>
					</navigator>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="margin-top-sm">
			<view class="cu-list menu ">
				<view class="cu-item arrow content" v-for="(item, index) in order.items" :index="index">
					
					<image style="width: 160rpx;height: 160rpx;" 
					:src="item.goods_cover"
					>
					</image>
					
					<view>
						<view class="margin-sm">
							<text class="text-black text-xl">{{ item.goods_name }}</text>
						</view>
						<view class="margin-sm">
							<text  class="text-black text-xm">规格{{ item.goods_spec }}</text>
						</view>
						<view class="margin-sm   ">
							订单价:<text  class="text-red text-price text-right margin-right-sm ">
							{{ item.price_selling }}
							</text>
						 原价:<text  class="text-red text-price text-right  " style="text-decoration: line-through;">
							{{ item.total_market }}
							</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom-fix">
			<!-- <view class="solid-bottom bottom-fix" style="[{margin-bottom:StatusBar + 'px'}]"> -->
			<view class="cu-bar bg-white tabbar border ">
				<button class="action">合计:</button>
				折扣<text class="text-gray text-price text-right  " style="text-decoration: line-through;" >{{ order.amount_reduct }}</text>
				总价:<button class="action text-price text-red text-ABC text-lg">  {{ order.amount_total }}</button>
				<view class="bg-red submit" @click="perfectOrder">立即订购</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			banner: [],
			goods: {},
			sku_key: false,
			order: {},
			address: {}
		};
	},
	onLoad(option) {
		var id = option.id;
	 
		this.order = JSON.parse(id);
		console.log(this.order);
	},
	onShow: function() {
		let pages = getCurrentPages();
		let currPage = pages[pages.length - 1];
		if (currPage.address != undefined && currPage.address != null) {
			try {
				this.address = JSON.parse(currPage.address); //这就是传递的参数
			} catch (e) {}
		}
	},
	methods: {
		perfectOrder(e) {
			var that = this;
			
			if(that.address.code==undefined){
				
			uni.showToast({
				title:'请选择收货地址',
				icon:'none'
			})	  
				return;
			}

			this.$net.fetch(
				function(ret) {
					// that.$router.push({path:'../order/pay?id='+JSON.stringify(ret)})
				},
				this.$net.perfectOrder,
				{ order_no: that.order.order_no, code: that.address.code },
				'post'
			);
		}
	}
};
</script>

<style></style>
