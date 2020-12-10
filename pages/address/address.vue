<template>
	<view>
		<scroll-view scroll-y>
			<view class="cu-list menu ">
				<view class="cu-item  " v-for="(item, index) in list">
					<view class="content">
						<view @click="select" :id="JSON.stringify(item)">
							<view class="padding-xs content">
								<view class=" content">{{ item.name }} {{ item.phone }}</view>
							</view>
						</view>
						<view @click="select" :id="JSON.stringify(item)">
							<view class=" content">{{ item.province }}-{{ item.area }}-{{ item.city }}-{{ item.detail }}</view>
						</view>

						<view class="content fr flex text-right">
							<text class="text margin-right-xs"><navigator class="content" :url="'../address/add?id=' + JSON.stringify(item)">编辑</navigator></text>
							<text class="text" @click="del" :id="item.code">删除</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<navigator class="content bottom-fix " url="../address/add" hover-class="none"><button class="text-white bg-red  no-border submit">新增</button></navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: {}
		};
	},
	onLoad() {
		this.loadData();
	},

	methods: {
		onPullDownRefresh() {
			this.list = [];
			this.loadData();
		},
		loadData() {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					thus.list = ret.list;
				},
				this.$net.address,
				{},
				'post'
			);
		},

		select(e) {
			try {
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2]; //上一个页面

				prevPage.address = e.currentTarget.id;
				uni.navigateBack();
			} catch (e9) {
				uni.navigateTo({
					url: '../address/add?id=' + e.currentTarget.id
				});
			}
		},
		del(e) {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					thus.list = ret.list;
					thus.loadData();
				},
				this.$net.delAddress,
				{ code: e.currentTarget.id },
				'post'
			);
		}
	}
};
</script>

<style></style>
