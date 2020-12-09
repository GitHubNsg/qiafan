<template>
	<view  >
		<view class="cu-list menu">
			<view class="cu-item " v-for="(item, index) in list" :key="index">
				<view class="uni-thumb margin-right-xs" style="width: 200rpx; height: 200rpx;"  >
					<image :src="item.cover" mode="widthFix"></image>
				</view>

				<view class="content  padding-lg">
					
					
					<view class="content">
						<text class="text-lg text-black">商品名称:{{item.goods_name}}</text>
					</view>
					<view class="content">
						<text>商品编码:{{item.goods_no}}</text>
					</view>
					 
					<view class="content">
						<text class="text-lg ">商品规格:{{item.goods_attr}}</text>
					</view>
					 
					<view class="content">
						优惠价:<text class="text-price text-red">{{item.goods_price}}</text>
					</view>
					<view class="content">
						市场价:<text class="text-price text-red" style="text-decoration: line-through;">{{item.line_price}}</text>
					</view>
					
				<!-- 	goods_code: "G70042250204"
					goods_cover: "https://v6.thinkadmin.top/upload/25/e9c92266d3b7ab86d3221b0c9305fe.jpg"
					goods_name: "复制商品的名称2"
					goods_sku: "S159962280311732"
					goods_spec: "默认分组::默认规格"
					order_no: "N20201128690795310"
					price_market: "111.00"
					price_selling: "44.00"
					stock_sales: 1
					total_market: "111.00"
					total_selling: "44.00"
					truck_count: 2
					truck_tcode: "" -->
					
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			status: '1',
			page: 1,
			order_no:''
		};
	},
	onLoad(option) {
		this.order_no = JSON.parse(option.id);
		this.loadData();
	},
	methods:{
		loadData() {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					 
					thus.list = thus.list.concat(ret.order);
				},
				this.$net.orderDetail,
				{ order_id: thus.order_no, page: thus.page },
				'post'
			);
		},
		onPullDownRefresh() {
			this.list = [];
			this.page = 1;
			this._isEnded = false;
			this.loadData();
		},
		
	}
};
</script>

<style></style>
