<template>
	<view class="esc__bg" :style="styleStr">
		<image class="esc__abs" :style="styleStr" :src="src" mode="scaleToFill" />
		<view class="esc__abs">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import {
		getStyleStr
	} from '../../utils/style.js'
	/**
	 * esc-bg-view (仅支持固定高的场景)
	 * @description 带背景的View
	 * @property {ImageURIString} src 背景图  
	 * @property {Number} width 图片宽
	 * @property {Number} height 图片高
	 */
	export default {
		name: 'esc-bg-view',
		props: {
			src: {
				type: String,
				required: true
			},
			width: {
				type: Number,
				required: true
			},
			height: {
				type: Number,
				required: true
			}
		},
		computed: {
			styleStr() {
				return getStyleStr({
					width: this.width + 'rpx',
					height: this.height + 'rpx'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.esc {
		&__bg {
			position: relative;
		}

		&__abs {
			// #ifndef APP-NVUE
			display: flex;
			// #endif
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
	}
</style>
