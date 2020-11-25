<template>
	<view>


		<swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="">
				<image style="background-image: url(../../static/BasicsBg.png);" mode="aspectFill"></image>
			</swiper-item>
		</swiper>  
		<view class="bottom-fix-no" >
			<!-- <view class="solid-bottom bottom-fix" style="[{margin-bottom:StatusBar + 'px'}]"> -->
			<view class="cu-bar bg-white tabbar border shop">
				<button class="action" open-type="contact">
					<view class="cuIcon-service text-green">
					</view>
					客服
				</button>
				<view class="action">
					<view class="cuIcon-cart">
					</view>
					购物车
				</view>
				<view  class="bg-orange submit">加入购物车</view>
				<view class="bg-red submit">立即订购</view>
			</view>
		</view>


	</view>

</template>
<script>
	export default {
		data() {
			return {};
		}
	};
</script>
<style>
	.page {
		height: 100vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}
</style>
