<template>
	<view>
		<navigator class="content bottom-fix "  url="../address/add" hover-class="none" >
			<button class="text-white bg-red  no-border submit">
				新增
				</button>
			</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
	
	.bottom-fix {
		position: fixed;
		z-index: 999;
		bottom: 0rpx;
		width: 100%;
		margin-bottom: 0;
	}
</style>
