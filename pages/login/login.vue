<template>
	<view>
		<view class="content ">
			<!-- #ifdef MP-WEIXIN -->
			<view @click="login" class="cu-avatar lg text-center cuIcon-weixin round bg-gradual-green" style=" text-align: center; margin-top: 90%;"></view>

			<!-- #endif -->

			<!-- #ifndef MP-WEIXIN -->


			<form>
				  <view   class="cu-form-group margin-top">
				  	<view class="title">手机号</view>
				  	<input placeholder="手机号"  v-model="loginData.phone" type="number"  name="input"></input>
				  </view>
				  <view   class="cu-form-group margin-top">
				  	<view class="title">密码</view>
				  	<input placeholder="密码"  type="password" v-model="loginData.password"   name="input"></input>
				  </view>
			</form>


			<view style=" text-align: center;  ">
				<button @click="loginOther" class=" bg-red  margin-top-xl   text-center   radius  " >登录</button>

				<button @click="regedit" class=" margin-top-xl   text-center   round  "  >注册</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loginData:{}
			
		};
	},
	methods: {
		login() {
			var thus = this;
			uni.login({
				success: ret => {
					uni.showToast({
						title: ret.code
					});
					thus.loginWx(ret.code);
				},
				fail: ret => {
					uni.showToast({
						title: ret.code
					});
				},
				complete: ret => {}
			});
		},
		loginWx(code) {
			this.$net.fetch(function(v) {
				uni.setStorageSync('info', JSON.stringify(v));
			}, this.$net.wxSession + '?code=' + code);
			thus.loadData();
		},
		loginOther(){
			this.$net.fetch(function(v) {
				uni.setStorageSync('info', JSON.stringify(v));
				
				uni.navigateBack({
					animationDuration:300
				})
				
			}, this.$net.loginin + '?phone=' + this.loginData.phone+"&password="+this.loginData.password);
		}
	}
};
</script>

<style></style>
