<template>
	<view>
		<scroll-view scroll-into-view scroll-with-animation="">
			<view class="cu-list menu">
			 	<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
			 	<view class="cu-item"><text>测试</text></view>
				<!-- <view class="cu-item"><text>测试</text></view> -->
				<!-- <view class="cu-item"><text>测试</text></view> -->
				<view class="cu-item"><text>测试</text></view>
				<!-- <view class="cu-item"><text>测试</text></view> -->
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
				<view class="cu-item"><text>测试</text></view>
			</view>
		</scroll-view>

		<view style="position: absolute;bottom: 0;width: 100%;">
			<view class="cu-bar bg-white tabbar border shop">
				<button class="action" open-type="contact">
					<view class="cuIcon-service text-green"><view class="cu-tag badge"></view></view>
					客服
				</button>
				<view class="action">
					<view class="cuIcon-cart"><view class="cu-tag badge">99</view></view>
					购物车
				</view>
				<view class="bg-orange submit">加入购物车</view>
				<view class="bg-red submit">立即订购</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				},
				{
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				},
				{
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}
			],
			modalName: null,
			gridCol: 3,
			gridBorder: false,
			menuBorder: false,
			menuArrow: false,
			menuCard: false,
			skin: false,
			listTouchStart: 0,
			listTouchDirection: null
		};
	},
	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		Gridchange(e) {
			this.gridCol = e.detail.value;
		},
		Gridswitch(e) {
			this.gridBorder = e.detail.value;
		},
		MenuBorder(e) {
			this.menuBorder = e.detail.value;
		},
		MenuArrow(e) {
			this.menuArrow = e.detail.value;
		},
		MenuCard(e) {
			this.menuCard = e.detail.value;
		},
		SwitchSex(e) {
			this.skin = e.detail.value;
		},

		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStart = e.touches[0].pageX;
		},

		// ListTouch计算方向
		ListTouchMove(e) {
			this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
		},

		// ListTouch计算滚动
		ListTouchEnd(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = e.currentTarget.dataset.target;
			} else {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		}
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

.switch-sex::after {
	content: '\e716';
}

.switch-sex::before {
	content: '\e7a9';
}

.switch-music::after {
	content: '\e66a';
}

.switch-music::before {
	content: '\e6db';
}
</style>
