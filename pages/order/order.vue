<template>
	<view>
		<view class="text-center flex">
			<view class="cu-item flex-sub" @click="tabSelect" id="">全部订单</view>
			<view class="cu-item flex-sub" @click="tabSelect" id="1">待付款</view>
			<view class="cu-item flex-sub" @click="tabSelect" id="2">待发货</view>
			<view class="cu-item flex-sub" @click="tabSelect" id="3">待收货</view>
		</view>

		<view>
			<uni-list class="cu-list menu">
				<uni-list-item :border="!waterfall" class="uni-list-item--waterfall arrow" title="自定义商品列表" v-for="item in list" :key="item._id">
					<template v-slot:header>
						<view class="uni-thumb " style="width: 200rpx; height: 200rpx;" :class="{ 'shop-picture-column': waterfall }">
							<image :src="item.items[0].goods_cover" mode="widthFix"></image>
						</view>
					</template>

					<view slot="body" class="shop content ">
						<view>
							<view class="uni-title">
								<text class="uni-ellipsis-2">{{ item.order_no }}</text>
							</view>
							<view>
								<text class="uni-tag hot-tag">{{ item.goods_tip }}</text>
								<text v-for="tag in item.tag" :key="tag" class="uni-tag">{{ tag }}</text>
							</view>
						</view>
						<view>
							<view class="shop-price">
								<text class="shop-price-text text-price text-red">{{ item.amount_goods }}</text>
							</view>
							<view class="uni-note">{{ item.create_at }}</view>
							<view class="uni-note ellipsis">
								<text class="uni-ellipsis-1">{{ item.shop_name }}</text>
								<text class="uni-link">进店 ></text>
								<text class="uni-link">详情 ></text>
							</view>
						</view>
					</view>
				</uni-list-item>
			</uni-list>

			<!-- <uni-load-more v-if="loading || options.status === 'noMore' " :status="options.status" /> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			waterfall: '',
			list: [],
			status:'1'
		};
	},
	onLoad(option) {
		this.status=option.id;
		this.loadData()
	},
 
	methods: {
		tabSelect(e){
			this.status=e.currentTarget.id;
			this.list=[];
			this.loadData();
		}, 
		loadData(){
		var thus = this;
		this.$net.fetch(
			function(ret) {
				uni.stopPullDownRefresh();
				thus.list=thus.list.concat( ret.list);
			},
			this.$net.getOrder,
			{'status':thus.status},
			'post'
		);	
		},
		onPullDownRefresh() {
					 this.list=[];
					 this.loadData();
					},
		
		/**
		 * 上拉加载回调函数
		 */
		onReachBottom() {
			this.loadMore();
		},

		loadMore() {
			if (this._isEnded) {
				return;
			}
			console.log('99');
			// this._execLoadData();
		} 
	}
};
</script>

<style>
 
</style>
