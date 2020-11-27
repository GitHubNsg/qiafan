<template>
	<view>
		<view class="text-center flex"  >
			<view class="cu-item flex-sub">全部订单</view>
			<view class="cu-item flex-sub">待付款</view>
			<view class="cu-item flex-sub">待发货</view>
			<view class="cu-item flex-sub">待收货</view>
		</view>
		<scroll-view   scroll-y>
			<view  >
				<view class="cu-list menu ">
					<view class="cu-item arrow " v-for="(item, index) in list" :key="index">
						<view class="content ">
							<view class="content padding-sm">
								<text>{{ item.order_no }}</text>
							</view>
						<view class="content padding-sm">
								<text>{{ item.create_at }}</text>
							</view>
							<view class="content padding-sm">
								<text class="text-red text-price">{{ item.amount_total }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: []
		};
	},
	onLoad(option) {
		var thus = this;
		this.$net.fetch(
			function(ret) {
				thus.list = ret.list;
			},
			this.$net.getOrder,
			{},
			'post'
		);
	},
	methods: {}
};
</script>

<style></style>
