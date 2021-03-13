<template>
	<!-- #ifdef APP-NVUE -->
	<scroller class="scroller" :style="pageStyle"><slot></slot></scroller>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<view class="content" :style="pageStyle"><slot></slot></view>
	<!-- #endif -->
</template>

<script>
/**
 * esc-page
 * @description esc-page
 * @property {Object} pageStyle 如果style失效，请用这个
 */
export default {
	name: 'esc-page',
	props: {
		pageStyle: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
/* #ifdef APP-NVUE */
.scroller {
	flex: 1;
	flex-direction: column;
}
/* #endif */
/* #ifndef APP-NVUE */
.content {
	display: flex;
	flex: 1;
	flex-direction: column;
}
/* #endif */
</style>
