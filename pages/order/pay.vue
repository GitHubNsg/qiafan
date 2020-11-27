<template>
	
	
	<view >
		<view class="flex">
			
			<navigator url="../address/address" >
				<text> 收货地址</text>
			</navigator>
			
		</view>
		
		<scroll-view scroll-y>
			
			<view class="cu-list menu">
			<view  class="cu-item" v-for="(item,index) in order.items" :index="index">
				
				<text class="bg-blue"> {{item.goods_name}} </text>
			</view>
			
			</view>
			
		</scroll-view>
		
		
		
		
		
		
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				banner: [],
				goods: {},
				sku_key: false,
				order: {}
			};
		},
		onLoad(option) {
			var id = option.id;
			console.log(id);
			this.order = JSON.parse(id);
			console.log(this.order);
		},
		methods: {}


	}
</script>

<style>
</style>
