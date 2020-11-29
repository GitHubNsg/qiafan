<template>
	<view>
	 

		<view class="margin-top-xl">
			<view class="cu-list menu ">
				<view @click="detail" :id="JSON.stringify(item.items)" class="cu-item   padding-top-xl margin-top-xs" v-for="(item,index) in list" :key="index">
					<view class="uni-thumb margin-right-xs" style="width: 200rpx; height: 200rpx;"  >
						<image :src="item.cover" mode="widthFix"></image>
					</view>

					<view class="content margin-top-sm">
						<view>
							<view class="content">
								<text class="uni-ellipsis-2">{{ item.name }}</text>
							</view>
							
							 
						</view>
						<view>
							 <view class="content">
							 	<text class="uni-ellipsis-2">{{ item.goods_spec }}</text>
							 </view>
							<view class="uni-note">订单时间:{{ item.create_at }}</view>

							<view class="content">
								订单价:
								<text class="text-price text-red margin-right-sm">{{ item.goods_price }}</text>
								 
								 
								 <view class="flex fr">
									 <text @click.stop="less" class="cuIcon-le" :id="index">-</text>
									 <input type="number " style="width: 30rpx;"  v-model="item.goods_num"/>
									 <text @click.stop="add" class="cuIcon-add"  :id="index"></text>
								 </view>
							</view>

						 	</view>
					</view>
				</view>
			</view>
			<view class="bottom-fix">
				<!-- <view class="solid-bottom bottom-fix" style="[{margin-bottom:StatusBar + 'px'}]"> -->
				<view class="cu-bar bg-white tabbar border ">
					<button class="action">合计:</button>
					总价:<button class="action text-price text-red text-ABC text-lg">  {{ totle}}</button>
					<view class="bg-red submit" @click="order">立即订购</view>
				</view>
			</view>
	 
	
			<!-- <uni-load-more v-if="loading || options.status === 'noMore' " :status="options.status" /> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			waterfall: '',
			list: [],
			status: '1',
			_isEnded: false,
			page: 1,
			totle:'',
			orderList:''
		};
	},
	onLoad(option) {
		this.status = option.id;
		this.loadData();
	},

	methods: {
		add(e){
			var index=e.currentTarget.id;
			this.list[index].goods_num=Number.parseInt(this.list[index].goods_num)+1;
			
			
			this.cacul();
		},
		less(e){
			var index=e.currentTarget.id;
			if(this.list[index].goods_num<=1){
				uni.showToast({
					title:'数量不能小于1',
					icon:'none'
				})
				return;
			}
			
			this.list[index].goods_num=Number.parseInt(this.list[index].goods_num)-1;
			this.cacul();
		},
		order(e) {
			var thus=this;
			 thus.orderList="";
			 this.list.forEach(item=>{
				 if(thus.orderList==''){
					 thus.orderList=item.code+"@"+item.goods_spec+"@"+item.goods_num;
				 }else{
					thus.orderList=thus.orderList+"||"+item.code+"@"+item.goods_spec+"@"+item.goods_num; 
				 }
			 
			  
			 })
			 
			 
			 this.$net.fetch(function(ret){
			 	
				thus.$net.fetch(function(ret2){ 
					
					thus.list=[];
					
					uni.navigateTo({
						url:'../order/pay?id='+JSON.stringify(ret)
					})
						 
					
				},thus.$net.clearCart,{'items':thus.orderList},'post');
				
				 
		 
			 	
			 },this.$net.addOrder,{'items':thus.orderList},'post');
			 			 
			 
			 
			 
			 
		},
		cacul(){
			var thus=this;
			thus.totle=0;
			
			this.list.forEach(item=>{
				thus.totle=thus.totle+item.goods_num*item.goods_price;
			})
		},
		
		
		
		
		detail(e) {
			console.log('00');
			uni.navigateTo({
				url: './detail?id=' + e.currentTarget.id
			});
		},
		loadData() {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					// if (ret.page.pages <= ret.page.current) {
						thus._isEnded = true;
					// }
				 
				 thus.totle=ret.order_total_price;
					thus.list = thus.list.concat(ret.list);
				},
				this.$net.getCartList,
				{ status: thus.status, page: thus.page },
				'post'
			);
		},
		onPullDownRefresh() {
			this.list = [];
			this.page = 1;
			this._isEnded = false;
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
					title: '暂无更多数据',
					icon: 'none'
				});
				return;
			}
			this.page++;
			this.loadData();
		},
		pay(e){
			var thus = this;
			this.$net.fetch(
				function(ret) {
					 thus.onPullDownRefresh();
				},
				this.$net.paymentOrder,
				{ order_no: e.currentTarget.id},
				'post'
			); 
			
		}
	}
};
</script>

<style></style>
