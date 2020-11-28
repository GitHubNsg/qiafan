<template>
	<view>
		<view class="text-center flex cu-bar">
			<scroll-view scroll-x class="bg-white nav text-center">
				<view class="cu-item flex-sub" :class="'' == status ? 'text-red cur' : ''" @click="tabSelect" id="">全部订单</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'2' == status ? 'text-red cur' : ''" id="2">待付款</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'3' == status ? 'text-red cur' : ''" id="3">待发货</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'4' == status ? 'text-red cur' : ''" id="4">待收货</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'5' == status ? 'text-red cur' : ''" id="5">已完成</view>
			</scroll-view>
		</view>

		<view class="margin-top-xl">
			<view class="cu-list menu">
				<view @click="detail" :id="JSON.stringify(item.items)" class="cu-item arrow padding-top-xl" v-for="item in list" :key="item._id">
					<view class="uni-thumb margin-right-xs" style="width: 200rpx; height: 200rpx;" :class="{ 'shop-picture-column': waterfall }">
						<image :src="item.items[0].goods_cover" mode="widthFix"></image>
					</view>

					<view class="content margin-top-sm">
						<view>
							<view class="uni-title">
								<text class="uni-ellipsis-2">订单号:{{ item.order_no }}</text>
							</view>
							<view>
								<text class="uni-tag hot-tag">{{ item.goods_tip }}</text>
							</view>
						</view>
						<view>
							 
							<view class="uni-note">订单时间:{{ item.create_at }}</view>

							<view class="content">
								订单价:
								<text class="text-price text-red margin-right-sm">{{ item.amount_total }}</text>
								免减:
								<text class="text-price text-red" style="text-decoration: line-through;">{{ item.amount_reduct }}</text>
							</view>

							<view class="content margin-top-xs margin-bottom-xs padding-sm align-center">
								订单状态:
								<text class="text-red" v-if="item.status == 0">已取消</text>
								<text class="text-red" v-if="item.status == 2">待付款</text>
								<text class="text-red" v-if="item.status == 3">待发货</text>
								<text class="text-red" v-if="item.status == 4">已发货</text>
								<text class="text-red" v-if="item.status == 5">已完成</text>

								<text @click.stop="pay" :id="item.order_no" class="text-white fr padding-xs  bg-red" v-if="item.status == 2">去付款</text>
							</view>
						</view>
					</view>
				</view>
			</view>

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
			status: '1',
			_isEnded: false,
			page: 1
		};
	},
	onLoad(option) {
		this.status = option.id;
		this.loadData();
	},

	methods: {
		tabSelect(e) {
			this.status = e.currentTarget.id;
			this.list = [];
			this.loadData();
		},
		detail(e) {
			console.log('00');
			uni.navigateTo({
				url: './detail?id=' + e.currentTarget.id
			});
		},
		loadData() {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					if (ret.page.pages <= ret.page.current) {
						thus._isEnded = true;
					}
					thus.list = thus.list.concat(ret.list);
				},
				this.$net.getOrder,
				{ status: thus.status, page: thus.page },
				'post'
			);
		},
		onPullDownRefresh() {
			this.list = [];
			this.page = 1;
			this._isEnded = false;
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
				uni.showToast({
					title: '暂无更多数据',
					icon: 'none'
				});
				return;
			}
			this.page++;
			this.loadData();
		},
		pay(e){
			var thus = this;
			this.$net.fetch(
				function(ret) {
					 thus.onPullDownRefresh();
				},
				this.$net.paymentOrder,
				{ order_no: e.currentTarget.id},
				'post'
			); 
			
		}
	}
};
</script>

<style></style>
