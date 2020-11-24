<template>
	<view>
		 
		 
		<block>
		 
			<view class=" bg-white">
				<view class="flex">
					
					<view class="basis-s cu-list menu">
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试</text>
						</view> 
						<view class="cu-item ">
							<text > 测试测</text>
						</view> 
					</view>
					
					 <view class="basis-lg cu-list menu">
					 	<view class="cu-item ">
					 		<text > 测试</text>
					 	</view> 
					 	<view class="cu-item ">
					 		<text > 测试</text>
					 	</view> 
					 	<view class="cu-item ">
					 		<text > 测试测</text>
					 	</view> 
					 </view>
					 
					 
				</view>
			</view>
			 	 
		</block>
		  
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
