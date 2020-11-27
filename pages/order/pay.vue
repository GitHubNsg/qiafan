<template>
	
	
	<view >
		<view class="flex">
			
			<navigator url="../address/address" >
				<text> 收货地址</text>
			</navigator>
			
		</view>
		
		<scroll-view scroll-y>
			
			<view class="cu-list menu arrow">
			<view  class="cu-item" v-for="(item,index) in order.items" :index="index">
				<view>
					
					<view> <text  > {{item.goods_name}} </text></view>
					<view><text> 规格{{item.goods_spec}}</text></view>
					<view><text> 价格{{item.price_selling}}</text></view>
				</view>
			</view>
			
			</view>
			
		</scroll-view>
		
		
		
		<view class="bottom-fix"   >
				<!-- <view class="solid-bottom bottom-fix" style="[{margin-bottom:StatusBar + 'px'}]"> -->
					<view class="cu-bar bg-white tabbar border ">
						<button class="action"  >
							合计:
						</button>
						 <button class="action"  >
						 	金额 {{order.amount_total}}
						 </button> 
						<view class="bg-red submit" @click="perfectOrder">立即订购</view>
					</view>
				</view>
		
		
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
		methods: {
			perfectOrder(e){
				var that=this;
				
				
				this.$net.fetch(function(ret){
					
					// that.$router.push({path:'../order/pay?id='+JSON.stringify(ret)})
					
				},this.$net.perfectOrder,
				{'order_no':that.order.order_no,'code':'A2020091128272'},'post');
			}
			
		}


	}
</script>

<style>
</style>
