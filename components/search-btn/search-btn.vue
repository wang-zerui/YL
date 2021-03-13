<template>
		<view class="search-bar">
			<button class="search-btn">
				{{content}}
			</button>
		</view>
</template>

<script>
	export default {
		name:"SearchBtn",
		data() {
			return {
				content: "搜索职位/单位"
			};
		}
	}
</script>

<style>
	.search-btn {
		display: flex;
		text-align: left;
		align-items: center;
		border-radius: 15rpx;
		height: 50rpx;
		font-size: 20rpx;
		color: #7f7f7f;
	}
</style>
