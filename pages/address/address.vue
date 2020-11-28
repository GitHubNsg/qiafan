<template>
	<view>
		<scroll-view scroll-y>
			<uni-list class="cu-list menu ">
				<uni-list-item class="cu-item  padding-lg" v-for="(item, index) in list">
					<view  slot="body" >
						
						<view class="content" @click="select" :id="JSON.stringify(item)">
							<view class="padding-xs">
								<text>{{ item.name }} {{ item.phone }}</text>
							</view>
							<view class="padding-xs">
								<text>{{ item.province }}-{{ item.area }}-{{ item.city }}-{{ item.address }}</text>
							</view>
							
						</view>

						<view class="uni-footer">
							<navigator class="content" :url="'../address/add?id='+ JSON.stringify(item)" open-type="redirect">
								<text >编辑</text>
							</navigator>
							<text>删除</text>
						</view>
					</view>
				</uni-list-item>
			</uni-list>
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
		loadData(){
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
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2]; //上一个页面
			  
			prevPage.address=e.currentTarget.id
			uni.navigateBack();
		}
	}
};
</script>

<style></style>
