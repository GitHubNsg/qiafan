<template>
	<view>

		<scroll-view scroll-y>

			<view class="cu-list menu ">

				<view class="cu-item arrow padding-lg" v-for="(item,index) in list">
					<navigator class="content" :url="'../address/add?id='+ JSON.stringify(item)" open-type="redirect">


						<view class="padding-xs"> <text>{{item.name}} {{item.phone}} </text></view>
						<view class="padding-xs"> <text>{{item.province}}-{{item.area}}-{{item.city}}-{{item.address}}</text></view>

					</navigator>
				</view>


			</view>


		</scroll-view>


		<navigator class="content bottom-fix " url="../address/add" hover-class="none">
			<button class="text-white bg-red  no-border submit">
				新增
			</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				'list': {}
			};
		},
		onLoad() {

			var thus = this;
			this.$net.fetch(function(ret) {
				thus.list = ret.list;
				// that.$router.push({path:'../order/pay?id='+JSON.stringify(ret)})

			}, this.$net.address, {}, 'post');


		},
		methods: {}
	};
</script>

<style>


</style>
