<template>
	<view>
		<view class="cu-list menu">
			<view class="cu-item ">
				<navigator class="content" url="../invited/bind" hover-class="none"  >
					<text class="cuIcon-forward text-gray"></text>
					<text class="text-gray">绑定邀请人</text>
				</navigator>
				 
				</view>

			<view class="cu-item flex align-center  margin-top-sm"  v-for="(info,index) in list" :key="index">
				<view class="content ">
					<view class="text-left  "  >
						<view   v-if="info.headimg == ''" class="cu-avatar cu-item round lg margin-sm" 
						style="background-image: url(../../static/img/tabBar/user_on.png);"></view>
					
					<view  v-if="info.headimg != ''" class="cu-avatar cu-item round lg margin-sm" 
					:style="'background-image: url('+info.headimg+');'"></view>
					
						<text class="text-black text-lg"    v-if="info.nickname != ''">{{ info.nickname }}</text>
						<text class="text-black text-lg" v-else-if ="info.username != ''">{{ info.username }}</text>
						<text class="text-black text-lg"   v-else > 未登录用户</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			waterfall: '',
			list: [],
			_isEnded: false,
			page: 1
		};
	},
	onLoad(option) {
		this.loadData();
	},
	methods: {
		loadData() {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					if (ret.page.pages <= ret.page.current) {
						thus._isEnded = true;
					}
					thus.list = thus.list.concat(ret.list);
				},
				this.$net.getNewsComment,
				{ page: thus.page },
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
	 
			// this._execLoadData();
		}
	}
};
</script>

<style></style>
