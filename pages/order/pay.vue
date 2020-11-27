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

				<view class="cu-item arrow content margin-top-sm" v-if="address.id > 0">
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
					
					<view class="cu-avatar lg" 
					:style="'background-image: url('+item.goods_cover+');'">
					</view>
					
					<view>
						<view class="margin-sm">
							<text class="text-black text-xl">{{ item.goods_name }}</text>
						</view>
						<view class="margin-sm">
							<text  class="text-black text-xm">规格{{ item.goods_spec }}</text>
						</view>
						<view class="margin-sm   ">
							<text  class="text-red text-price text-right  ">
							{{ item.price_selling }}
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
				<button class="action text-price text-red text-ABC text-xxl">  {{ order.amount_total }}</button>
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
		console.log(id);
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
