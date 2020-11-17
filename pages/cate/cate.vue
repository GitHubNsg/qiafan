<template>
	<view>
		 
		 
		<block>
		 
			<view class=" bg-white">
				<view class="flex">
					
					<uni-list class="basis-xs">
						
						<uni-list-item title="列表文字"> 
						 
						</uni-list-item>
						<uni-list-item title="列表文字">
						 
						</uni-list-item>
					</uni-list>
					
					 
					<uni-list class="basis-xl bg-grey margin-xs padding-sm radius">
						<template v-slot:header>
							<view class="uni-thumb shop-picture">
								<image :src="item.goods_thumb" mode="aspectFill"></image>
							</view>
						</template>
						
					</uni-list>

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
