<template>
	<view>
		<view class="text-center flex cu-bar">
			<scroll-view scroll-x class="bg-white nav text-center">
				<view class="cu-item flex-sub" :class="'all' == dataType ? 'text-red cur' : 'all'" @click="tabSelect" id="all">全部订单</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'payment' == dataType ? 'text-red cur' : 'payment'" id="payment">待付款</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'delivery' == dataType ? 'text-red cur' : ''" id="delivery">待发货</view>
				<view class="cu-item flex-sub" @click="tabSelect" :class="'received' == dataType ? 'text-red cur' : ''" id="received">待收货</view>
			</scroll-view>
		</view>

		<view class="margin-top-xl">
			<view class="cu-list menu ">
				<view @click="detail" :id="JSON.stringify(item.order_id)" class="cu-item arrow padding-top-xl margin-top-xs" v-for="item in list" :key="item._id">
					 

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
							 
							<view class="uni-note">订单时间:{{ item.create_time }}</view>

							<view class="content">
								订单价:
								<text class="text-price text-red margin-right-sm">{{ item.pay_price }}</text>
								免减:
								<text class="text-price text-red" style="text-decoration: line-through;">{{ item.total_price }}</text>
							</view>

							<view class="content margin-top-xs margin-bottom-xs padding-sm align-center">
								订单状态: {{item.order_status.text}}
								付款状态: {{item.pay_status.text}}
								发货状态: {{item.receipt_status.text}}
							 

								<text @click.stop="pay" :id="item.order_id" class="text-white fr padding-xs  bg-red" v-if="item.pay_status.value == 10">去付款</text>
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
			dataType: 'all',
			_isEnded: false,
			page: 1
		};
	},
	onLoad(option) {
		this.dataType = option.id;
		this.loadData();
	},

	methods: {
		tabSelect(e) {
			this.dataType = e.currentTarget.id;
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
					if(ret.list.current_page<ret.list.last_page){
						console.log('12');
						thus._isEnded=false;
					}else{
						console.log('23');
						thus._isEnded=true;
					}
					thus.list = thus.list.concat(ret.list);
				},
				this.$net.getOrder,
				{ dataType: thus.dataType, page: thus.page },
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
				{ order_id: e.currentTarget.id},
				'post'
			); 
			
		}
	}
};
</script>

<style></style>
