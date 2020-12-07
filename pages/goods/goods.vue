<template>
	<view>
		<scroll-view scroll-y>
			<view class="grid col-2 cu-list  no-padding ">
				<view class="cu-item" v-for="(item, index) in dataList" :key="index">
					<navigator :url="'../detail/detail?id=' + item.goods_id">
						<view class="content text-center">
							<image
								class="cu-avatar xl  margin-10 "
								style="width: 96%;height: 280rpx; margin: 2%;"
								:src="item.cover"
								:style="'background-image: url(' + item.cover + ');'"
							></image>

							<text class="text-ABC text-lg " style="color: black;">{{ item.goods_name }}</text>
							<view class="text-center">
								<text class="text-price text-lg" style="color: red;">{{ item.goods_min_price }}-{{ item.goods_max_price }}</text>
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
			dataList: [],
			cate:'',
			page:1,
			_isEnded:false
		};
	},
	onLoad(option) {
		this.cate= option.id;
		this.loadData();
	},
	methods: {
		loadData() {
			
			var thus = this;
			this.$net.fetch(
				function(r) {
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
					category_id: thus.cate,
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
			if (this._isEnded) {
				uni.showToast({
					title:'暂无更多数据',
					icon:'none'
				})
				return;
			}
			this.page++;
			this.loadData();
			 
			// this._execLoadData();
		}
	}
};
</script>

<style></style>
