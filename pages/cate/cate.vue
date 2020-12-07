<template>
	<view>
		<scroll-view>
			<block>
				<view class="">
					<view class="flex flex-wrap">
						<view class="basis-xs" style="margin: 0rpx;">
							<scroll-view scroll-y>
								<view class="basis-xl   cu-list menu  no-padding">
									<view
										:class="item.select ? 'bg-white' : ''"
										:style="item.select ? 'background-color:#FFFFFF;color:red;font-size:32rpx ' : ''"
										@click="selectItem"
										v-for="(item, index) in items"
										:key="index"
										:id="index"
										class="cu-item "
										style="margin: 0rpx; background-color: #EEEEEE;"
									>
										<view>
											<text class="text-center align-center ">{{ item.name }}</text>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
						<view class="basis-xl     no-padding" style="margin: 0rpx; ">
							<scroll-view scroll-y>
								<view class=" menu cu-list no-padding  " style=" margin-top: 10rpx;padding: 10rpx;">
									<view v-for="(item, index) in subItem" :key="index">
										<navigator :url="'../goods/goods?id=' + item.category_id">
											<view class="text-left padding-xs cu-item arrow text-sm "
											 style="padding-left: 30rpx;background-color: #FFFFFF;margin-bottom: 4rpx;margin-top: 4rpx;">{{ item.name }}</view>
										</navigator>

										<view class=" grid col-2 cu-list no-padding " style=" margin-top: 0rpx;padding: 0rpx;background-color: #FFFFFF;">
											<view class="cu-item" v-for="(childerItems, child) in item.child" :key="child">
												<navigator :url="'../goods/goods?id=' + childerItems.category_id">
													<view class="cu-avatar" :style="'background-image: url(' + childerItems.cover + ');'"></view>
													<view class="content margin-top-sm">
														<view class="text-black">{{ childerItems.name }}</view>
													</view>
												</navigator>
											</view>
										</view>
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
			subItem: [],
			items: []
		};
	},
	onLoad() {
		var thus = this;
		this.$net.fetch(
			function(v) {
				thus.items = v.list;
				thus.items[0].select = true;
				thus.subItem = thus.items[0].child;
			},
			this.$net.getCate,
			{ pid: 0 }
		);
	},

	methods: {
		selectItem(e) {
			console.log(this.items);
			console.log(e.currentTarget.id);

			for (var i = 0; i < this.items.length; i++) {
				this.items[i].select = false;
			}

			this.items[e.currentTarget.id].select = true;
			if (this.items[e.currentTarget.id].child != undefined) {
				this.subItem = this.items[e.currentTarget.id].child;
			} else {
				this.subItem = [];
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
