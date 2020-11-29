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
				
				<button @click="regedit" class=" margin-top-xl   text-center   round bg-red "  >注册</button>
				
				<view @click="loginOther" class=" text-blue  margin-top-xl  fr   radius margin-right-xs" >已有账号,去登录</view>
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
		loginOther(){
			uni.navigateBack({
				animationDuration:300
			})
		},
		 
		regedit(){
			this.$net.fetch(function(v) {
				
				uni.navigateBack({
					animationDuration:300
				})
				
			}, this.$net.register +
			 '?phone=' + this.loginData.phone+
			 "&password="+this.loginData.password);
		}
	}
};
</script>

<style></style>
