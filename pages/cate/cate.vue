<template>
	<view>
		<scroll-view>
			<block>
				<view class="">
					<view class="flex flex-wrap">
						<view class="basis-xs" style="margin: 0rpx;">
							<scroll-view scroll-y>
								<view class="basis-xl   cu-list menu  no-padding">
									<view @click="selectItem" v-for="(item, index) in items" :key="index" :id="index"  class="cu-item" style="margin: 0rpx;">
										<view >
											<text class="text-center align-center">{{item.name}}</text>
											</view>
									</view>
								</view>
							</scroll-view> 
						</view>
						<view class="basis-xl     no-padding" style="margin: 0rpx;">
							<scroll-view scroll-y>
								<view class=" grid col-2 cu-list no-padding " style=" margin-top: 0rpx;padding: 0rpx;">
									<view v-for="(item, index) in subItem" :key="index" class="cu-item ">
										<navigator :url="'../goods/goods?id='+item.id" ><text class="text-center align-center">{{item.name}}</text></navigator>
									</view>
								</view>
							</scroll-view>
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
			subItem: [ ],
			items: [ ],
 
			 
		};
	},
	onLoad() {
		var thus=this;
		this.$net.fetch(function(v){
			thus.items=v;
			thus.subItem=v[0].sub;
		},this.$net.getCate);
	},
	
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		selectItem(e){
			console.log(this.items)
			console.log(e.currentTarget.id)
			if(this.items[e.currentTarget.id].sub!=undefined){
					this.subItem=this.items[e.currentTarget.id].sub
			}else{
				this.subItem=[]
			}
			
		}
	}
};
</script>

<style>
page {
	padding-top: 0px;
}
</style>
