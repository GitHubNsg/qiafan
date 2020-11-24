<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">


			<view>
				<view class="text-left " style="background-color: #f00;height: 220rpx;vertical-align: middle;">

					<view class="cu-avatar cu-item round" style="background-image: url(../../static/img/tabBar/user_on.png);margin: 60rpx">
					</view>
					<text class="text-black"> 123</text>

				</view>

				<view>

					<!-- <view class=" margin-top-sm">我的订单</view> -->

					<view class="cu-list grid col-4">
						<view class="cu-item">
							<navigator url="../order/order?id=0" open-type="redirect" class="cuIcon-all text-red">

								<text class="text-black">我的订单</text>
							</navigator>
						</view>
						<view class="cu-item">
							<navigator url="../order/order?id=1" open-type="redirect" class="cuIcon-all text-red">

								<text class="text-black">待付款</text>
							</navigator>
						</view>
						<view class="cu-item">
							<navigator url="../order/order?id=2" open-type="redirect" class="cuIcon-all text-red">

								<text class="text-black">待发货</text>
							</navigator>
						</view>
						<view class="cu-item">
							<navigator url="../order/order?id=3" open-type="redirect" class="cuIcon-all text-red">

								<text class="text-black">待发货</text>
							</navigator>
						</view>
			 
					</view>

				</view>

				<view class="cu-list menu margin-top-xl">

					<view class="cu-item arrow">
						<navigator class="content" url="../help/help" hover-class="none" open-type="redirect">

							<text class="cuIcon-addressbook text-grey"></text>
							<text class="text-grey"> 收货地址</text>
						</navigator>
					</view>
					<view class="cu-item arrow">
						<navigator class="content" url="../help/help" hover-class="none" open-type="redirect">
							<text class="cuIcon-question text-gray"></text>
							<text class="text-gray">我的帮助</text>
						</navigator>

					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class="cuIcon-community text-gray"></text>
							<text class="text-gray">联系客服</text>
						</view>

					</view>

				</view>







			</view>







		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}      ],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			 
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>
