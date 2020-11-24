<template>
	<view>
		
		
		<form >
			<view class="cu-form-group margin-top">
				<view class="title">12</view>
				<input placeholder="两字短标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input"></input>
			</view><view class="cu-form-group">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input"></input>
			</view><view class="cu-form-group">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input"></input>
			</view>
			
			
		</form>
		
		<button @click="save()" class="bg-red  submit text-white ">保存</button>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			save:function(){
				console.log('save')
			}
			
			
			
			
		}
	};
</script>

<style>
</style>
