<template>
	<view >
		<view>
			<view class="bg-white align-center text-black padding-bottom-xl padding-top-xl">
				<view style="text-align: center;size: 22rpx;" class="text-ABC text-black    text-lg">{{ news.name }}</view>
			</view>
			<view class="fr  margin-bottom-xl">
				<text class="text-gray">发布时间:{{ news.create_at }}</text>
			</view>
			<view class="margin-top-xl bg-white " style="text-align: center;"><rich-text class="article bg-white" :nodes="news.content"></rich-text></view>
		</view>

		<view class="cu-list menu">
			<view class="cu-item      arrow margin-top-sm" v-for="(info, index) in list" :key="index">
				<view v-if="info.cover == ''" class="cu-avatar cu-item radius lg margin-sm" style="background-image: url(../../static/img/tabBar/user_on.png);"></view>

				<view v-if="info.cover != ''" class="cu-avatar cu-item radius lg margin-sm" :style="'background-image: url(' + info.cover + ');'"></view>

				<view class="content">
					<view class="content">
						<text class="text-black text-lg">{{ info.name }}</text>
					</view>

					<view class="content">
						<text class="text-gray text-sm">阅读:{{ info.num_read }}</text>
					</view>
					<view class="content">
						<text class="text-gray text-sm">评论:{{ info.num_comment }}</text>
					</view>
					<view class="content fr">
						<text class="text-black text-lg cu-time">{{ info.create_at }}</text>
					</view>
				</view>
			</view>
		</view>



 

		<view class="bottom-fix-no ">
			<view   class="cu-form-group margin-top "  :class="isConment==true?'':'hide'">
				<input placeholder="请输入你的评论" v-model="msg" name="input"></input>
				<view @click="sendConment" class=" cuIcon-forward"></view>
			<view @click="closeConment" class="cuIcon-close margin-left-sm"></view>
			</view>
			
			
			
			
			<view class="cu-list col-4 grid " :class="isConment?'hide':''">
			<view class="cu-item" @click="favor">
				<view class="cuIcon-favor"><view class="cu-tag badge">{{ news.num_collect }}</view></view>
			</view>
			<view class="cu-item " @click="comment">
				<view class="cuIcon-comment"><view class="cu-tag badge">{{ news.num_comment }}</view></view>
				 

			</view>
			<view class="cu-item " @click="like">
				<view class="cuIcon-like"><view class="cu-tag badge">{{ news.num_like }}</view></view>
			</view>
			<view class="cu-item">
				<view class="cuIcon-read"><view class="cu-tag badge">{{ news.num_read }}</view></view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			waterfall: '',
			list: [],
			_isEnded: false,
			page: 1,
			news: {},
			isConment:false,
			msg:''
		};
	},
	onLoad(option) {
		this.news.id = option.id;
		this.loadNewsData();

		this.loadData();
	},
	methods: {
		closeConment(){
			this.isConment=false;
		},
		sendConment(){
			
			if(this.msg==''){
				uni.showToast({
					title:'请输入评论',
					icon:'none'
				})
				return;
			}
			
			
			
			var thus = this;
			this.$net.fetch(
				function(ret) {
					thus.msg='';
					thus.onPullDownRefresh()
					// thus.news = ret.list[0];
				},
				this.$net.addComment,
				{ cid: thus.news.id, content:this.msg },
				'post'
			);
			
			
		},
		like(){
			
		},
		favor(){
			
		},
		
		comments(){
			this.isConment=!this.isConment;
		},
		comment(e){
			this.isConment=true;
			
		},
		loadNewsData() {
			var thus = this;
			this.$net.fetch(
				function(ret) {
					thus.news = ret.list[0];
				},
				this.$net.getNewsItem,
				{ id: thus.news.id },
				'post'
			);
		},

		loadData() {
			
			var thus = this;
			this.$net.fetch(
				function(ret) {
					// if (ret.page.pages <= ret.page.current) {
					thus._isEnded = true;
					// }
					thus.list = thus.list.concat(ret.list);
				},
				this.$net.getNewsComment,
				{ page: thus.page, cid: thus.news.id },
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

			// this._execLoadData();
		}
	}
};
</script>

<style>
	.hide{
		display: none;
	}
	
</style>
