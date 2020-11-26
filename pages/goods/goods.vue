<template>
	<view>
		<scroll-view scroll-y>


			<view class="grid col-2 cu-list  no-padding ">

				<view class="cu-item" v-for="(item,index) in dataList" :key="index">
					<navigator :url="'../detail/detail?id='+JSON.stringify(item)">

						<view class="content text-center">
							<image class="cu-avatar xl  margin-10 " 
							  style="width: 96%;height: 280rpx; margin: 2%;"
							:src="item.cover"
							 :style="'background-image: url('+item.cover+');'">
							</image>

							<text class="text-ABC text-lg " style="color: black;">{{item.name}} </text>
							<view class="text-center">
								<text class="text-price text-lg" style="color: red;">
									{{item.price_selling}}
								</text>
								<text class="text-price " style=" font-style: italic;text-decoration: line-through;">
									{{item.price_market}}</text>
							</view>
						</view>
					</navigator>
				</view>

			</view>



		</scroll-view>






	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: []
			}
		},
		onLoad(option) {
			var id = option.id;
			var thus = this;
			this.$net.fetch(function(r) {
				console.log(r)
				thus.dataList = r.list;
			}, this.$net.getGoods, {
				'cate': id
			}, 'post')

		},
		methods: {

		}
	}
</script>

<style>

</style>
