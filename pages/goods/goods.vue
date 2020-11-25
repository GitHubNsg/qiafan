<template>
	<view> 
		<scroll-view scroll-y>


			<view class="grid col-3 cu-list  no-padding ">

				<view class="cu-item" v-for="(item,index) in dataList" :key="index">
					<navigator :url="'../detail/detail?id='+JSON.stringify(item)">

						<view class="content">
							<view class="cu-avatar margin-10" :style="'background-image: url('+item.cover+');'"></view>

							<text>{{item.name}} </text>
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
				dataList: [ 
				]
			}
		},
		onLoad(option) {
			var id=option.id;
			var thus=this;
			this.$net.fetch(function(r){
				console.log(r)
				thus.dataList=r.list;
			},this.$net.getGoods,{'cate':id},'post')
			
		},
		methods: {

		}
	}
</script>

<style>

</style>
