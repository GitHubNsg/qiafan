<template>
	<view>
		 
		 <scroll-view  >
		 
		<block>
		 
			<view class="">
				<view class="flex flex-wrap">
					
					<view class="basis-xs  cu-list menu  no-padding" style="margin: 0rpx;" >
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
					</view>
					
					 <view class="basis-xl grid col-2 cu-list no-padding " 
					 style=" margin-top: 0rpx;padding-left: 1rpx;">
					 	<view class="cu-item ">
					 		<text > 测试</text>
					 	</view> 
					 	<view class="cu-item ">
					 		<text > 测试</text>
					 	</view> 
					 	<view class="cu-item ">
					 		<text > 测试</text>
					 	</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
					 </view>
					 
					 
				</view>
			</view>
			 	 
		</block>
		  </scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			CustomBar: this.CustomBar,
			TabCur: 0,
			avatar: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
			],
			tabNav: ['Flex布局', 'Grid布局', '辅助布局']
		};
	},
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		}
	}
};
</script>

<style>
page {
	padding-top: 0px;
}
</style>
