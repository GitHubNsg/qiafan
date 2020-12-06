<template>
	<view>
		<scroll-view>
			<block>
				<view class="">
					<view class="flex flex-wrap">
						<view class="basis-xs" style="margin: 0rpx;">
							<scroll-view scroll-y>
								<view class="basis-xl   cu-list menu  no-padding">
									<view @click="selectItem" v-for="(item, index) in items" :key="index" :id="index" class="cu-item" style="margin: 0rpx;">
										<view>
											<text class="text-center align-center">{{item.name}}</text>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
						<view class="basis-xl     no-padding" style="margin: 0rpx;">
							<scroll-view scroll-y>
								<view class=" menu cu-list no-padding " style=" margin-top: 0rpx;padding: 0rpx;">


									<block v-for="(item,index) in subItem" :key="index">
										<view>
											<navigator :url="'../goods/goods?id='+item.category_id">
											<view class="text-center padding-xs cu-item">{{item.name}}</view>
											</navigator>
											<view class=" grid col-2 cu-list no-padding " style=" margin-top: 0rpx;padding: 0rpx;">
												<view class="cu-item" v-for="(childerItems,child) in item.child" :key="child">
													<navigator :url="'../goods/goods?id='+childerItems.category_id">

														<view class="cu-avatar" :style="'background-image: url('+childerItems.cover+');'"></view>
														<view class="content">
															<view class="text-grey">{{childerItems.name}}
															</view>

														</view>
													</navigator>


												</view>
											</view>
										</view>
									</block>
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
				items: [],


			};
		},
		onLoad() {
			var thus = this;
			this.$net.fetch(function(v) {
				thus.items = v.list;
				thus.subItem = thus.items[0].child;
			}, this.$net.getCate);
		},

		methods: {
			 
			selectItem(e) {
				console.log(this.items)
				console.log(e.currentTarget.id)
				if (this.items[e.currentTarget.id].child != undefined) {
					this.subItem = this.items[e.currentTarget.id].child
				} else {
					this.subItem = []
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
