<template>
	<view>


		<form>
			<view class="cu-form-group margin-top">
				<view class="title">收货人</view>
				<input placeholder="收货人" v-model="address.name" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号</view>
				<input placeholder="手机号" v-model="address.phone" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所在地区</view>
				<gb-picker @update="update" @change="change">
					<text>{{text}}</text>
				</gb-picker>
			</view>
			<view class="cu-form-group">
				<view class="title">详细地址</view>
				<input placeholder="详细地址" v-model="address.address" name="input"></input>
			</view>



		</form>

		<button @click="save()" class="bg-red  submit text-white ">保存</button>


		<view class="container">
		
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				'address': {},
				text: '',
			};
		},

		onLoad(option) {

			var id = option.id
			this.address = JSON.parse(id);


		},

		methods: {
			save: function() {
				console.log('save')
			},
			update(e) {
				this.text = e.name.join('/')
			},
			change(e) {
				console.log(e.code)
				this.text = e.name.join('/')
			}




		}
	};
</script>

<style>
</style>
