<template>
	<view> 
		<scroll-view scroll-y>


			<view class="grid col-3 cu-list  no-padding ">

				<view class="cu-item" v-for="(item,index) in dataList" :key="index">
					<navigator url="../detail/detail">

						<view>
							<view class="cu-avatar round" style="background-image: url(../../static/componentBg.png);"></view>

							<text>{{item.title}} </text>
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
				dataList: [{
						"title": "test"
					},
					{
						"title": "test1"
					},
					{
						"title": "test2"
					},
					{
						"title": "test2"
					}, {
						"title": "test2"
					}, {
						"title": "test2"
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
