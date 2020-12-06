<template>
	<view>
	 
		 
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.img" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.img" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		 
		 
		 <scroll-view scroll-y>
		 	<view class="grid col-2 cu-list  no-padding ">
		 		<view class="cu-item" v-for="(item, index) in dataList" :key="index">
		 			<navigator :url="'../detail/detail?id=' + JSON.stringify(item)">
		 				<view class="content text-center">
		 					<image
		 						class="cu-avatar xl  margin-10 "
		 						style="width: 96%;height: 280rpx; margin: 2%;"
		 						:src="item.cover"
		 						:style="'background-image: url(' + item.cover + ');'"
		 					></image>
		 
		 					<text class="text-ABC text-lg " style="color: black;">{{ item.name }}</text>
		 					<view class="text-center">
		 						<text class="text-price text-lg" style="color: red;">{{ item.price_selling }}</text>
		 						<text class="text-price " style=" font-style: italic;text-decoration: line-through;">{{ item.price_market }}</text>
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
				cardCur: 0,
				swiperList: [ ],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				dataList: [],
				cate:'',
				page:1,
				_isEnded:false
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
			
			var thus=this;
			this.$net.fetch(function(v){
				thus.swiperList=v.wxapp.slider==null?[]:v.wxapp.slider.split("|");
			 
				
			},this.$net.getSlider);
			thus.loadData();
			
		},
		methods: { 
			
			loadData() {
				
				var thus = this;
				this.$net.fetch(
					function(r) {
						uni.stopPullDownRefresh();
						if(r.list.current_page<r.list.last_page){
							console.log('12');
							thus._isEnded=false;
						}else{
							console.log('23');
							thus._isEnded=true;
						}
						thus.dataList =thus.dataList.concat(r.list.data) ;
					},
					this.$net.getGoods,
					{
						cate: thus.cate,
						'page':thus.page
					},
					'post'
				);
			},
			onPullDownRefresh() {
				this.page=1;
				this._isEnded=false;
				this.dataList = [];
				this.loadData();
			},
			/**
			 * 上拉加载回调函数
			 */
			onReachBottom() {
				this.loadMore();
			},
			loadMore() {
				this.page++;
				if (this._isEnded) {
					uni.showToast({
						title:'暂无更多数据',
						icon:'none'
					})
					return;
				}
				this.loadData();
				console.log('99');
				// this._execLoadData();
			},
		 
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
</style>
