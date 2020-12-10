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
				 
				<view @click="chooseAddr"  >
					<text>{{areaRegion}}</text>
				</view>
				 
				 
			</view>
			<view class="cu-form-group">
				<view class="title">详细地址</view>
				<input placeholder="详细地址" v-model="address.detail" name="input"></input>
			</view>



		</form>

		<button @click="save()" class="bg-red  submit text-white ">保存</button>


		<view class="container">
		 
		<n-address ref="addr" @up-data="upData" :fValue="fValue" :fStyles="fStyles"></n-address>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				'address': {},
				areaRegion: '选择地址',
				fValue:[0,0,0],
				fStyles: {
					'confirmText':'确定',
					'canceltext':'取消',
					'columnFontSize':'36rpx'
				}
			};
		},

		onLoad(option) {

			var id = option.id
			this.address = JSON.parse(id);


		},

		methods: {
			 chooseAddr() {
			        this.$refs['addr'].popUp()
			    },
				 upData (e) {
				        console.log(e)
						this.areaRegion =e.region;
						this.address.province=e.regionArr[0];
						this.address.city=e.regionArr[1];
						this.address.area=e.regionArr[2];
						this.address.region=e.provinceCode+","+e.cityCode+","+e.districtCode;
						//cityCode: 2
// districtCode: 3
// provinceCode: 1
						
						
				    },
			save: function() {
				
				if(this.address.area==undefined){
					uni.showToast({
						title:'请选择地址',
						icon:'none'
					});
					return;
				}
				
				
				
				 this.$net.fetch(function(ret){
					 uni.showToast({
					 	title:'ok',
						icon:'none'
					 });
					 uni.navigateBack({
					 	animationDuration:300
					 })
				 	
				 }, this.address.code==undefined? this.$net.addAddress:this.$net.stateAddress,this.address,'post');	
			},
			 




		}
	};
</script>

<style>
</style>
