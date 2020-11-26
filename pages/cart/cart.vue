<template>
	<view  >
		<scroll-view scroll-y>
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
<view class="bottom-fix"   >
		<!-- <view class="solid-bottom bottom-fix" style="[{margin-bottom:StatusBar + 'px'}]"> -->
			<view class="cu-bar bg-white tabbar border ">
				<button class="action"  >
					合计:
				</button>
				 <button class="action"  >
				 	金额
				 </button>
				<view class="bg-red submit">立即订购</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		
		console.log(this.StatusBar);
			console.log(uni.statusBarHeight);
		return {
			StatusBar:  this.StatusBar,
			cuIconList: [
				  
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
 
</style>
