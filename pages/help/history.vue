<template>
	<view>
		<view class="cu-list menu">
			<view  @click="news" :id="info.id" class="cu-item      arrow margin-top-sm" v-for="(info, index) in list" :key="index">
				<view v-if="info.cover == ''" class="cu-avatar cu-item radius lg margin-sm" style="background-image: url(../../static/img/tabBar/user_on.png);"></view>

				<view v-if="info.cover != ''" class="cu-avatar cu-item radius lg margin-sm" :style="'background-image: url(' + info.cover + ');'"></view>

				<view class="content">
					<view class="content">
						<text class="text-black text-lg">{{ info.name }}</text>
					</view>

					<view class="content">
						<text class="text-gray text-sm">阅读:{{ info.num_read }}</text>
					</view>
					<view class="content">
						<text class="text-gray text-sm">评论:{{ info.num_comment }}</text>
					</view>
					<view class="content fr">
						<text class="text-black text-lg cu-time">{{ info.create_at }}</text>
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
		news(e){
			
			uni.navigateTo({
				url:'./news?id='+e.currentTarget.id
			})
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
				this.$net.getHistory,
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
