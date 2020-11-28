<template>
	<view>


		<form>
			<view class="cu-form-group margin-top">
				<view class="title">邀请人</view>
				<input placeholder="邀请人" v-model="bind.id" name="input"></input>
			</view> 
			 


		</form>

		<button @click="save()" class="bg-red  submit text-white ">保存</button>


		 

	</view>
</template>

<script>
	export default {
		data() {
			return {
				'bind': {},
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

		 

		},

		methods: {
			 chooseAddr() {
			        this.$refs['addr'].popUp()
			    },
				 upData (e) {
				        console.log(e)
						this.areaRegion =e.region;
				    },
			save: function() {
				 this.$net.fetch(function(ret){ 
				 	
				 },this.$net.bindFrom,{'from':this.bind.id},'post');	
			},
			 




		}
	};
</script>

<style>
</style>
