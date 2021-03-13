<template>
	<view>
		<!-- header开始 -->
		<view class="footer">
			<image :src="image.url" class="footer-avator"></image>
		</view>
		
		<!-- header结束 -->
		
		<!-- 内容开始 -->
		<!-- 内容结束 -->
		
		<!-- footer开始 -->
		<!-- footer结束 -->
	</view>
</template>

<script>
	export default {
		name: "promotion-card",
		props: {
			uuid: {
				type: Number
			},
			title: {
				type: String,
				default: "默认标题"
			},
			tags: {
				type: Array,
				default(){
					return ['标签1', '标签2','标签3','标签4']
				}
			},
			company: {
				type: String,
				default: "默认公司"
			},
			collect: {
				type: Boolean,
				default: false
			},
			index: {
				type: Number,
				default: 0
			},
			image: {
				type: Object,
				default: function() {
					return {
						url: "../../static/avator.png", //图片地址
					}
				}
			},
		},
		data() {
			return {
				message: "click event",
				backgroundColors: ["#fcbf3e", "#fd7969", "#fd7969", "#d695e7"]
			}
		},
		computed: {
		},
		methods: {
			getBgc(index) {
				return this.backgroundColors[index]
			},
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			},
			longTap() {
				this.$emit('longclick', {
					index: this.index
				});
			}
		}
		// props: {
		// 	//是否铺满
		// 	full: {
		// 		type: Boolean,
		// 		default: false
		// 	},
		// 	image: {
		// 		type: Object,
		// 		default: function() {
		// 			return {
		// 				url: "", //图片地址
		// 				height: 60, //图片高度
		// 				width: 60, //图片宽度
		// 				circle: false
		// 			}
		// 		}
		// 	},
		// 	//标题
		// 	title: {
		// 		type: Object,
		// 		default: function() {
		// 			return {
		// 				text: "", //标题文字
		// 				size: 30, //字体大小
		// 				color: "#7A7A7A" //字体颜色
		// 			}
		// 		}
		// 	},
		// 	//标签，时间等
		// 	tag: {
		// 		type: Object,
		// 		default: function() {
		// 			return {
		// 				text: "", //标签文字
		// 				size: 24, //字体大小
		// 				color: "#b2b2b2" //字体颜色
		// 			}
		// 		}
		// 	},
		// 	header: {
		// 		type: Object,
		// 		default: function() {
		// 			return {
		// 				bgcolor: "#fff", //背景颜色
		// 				line: false //是否去掉底部线条
		// 			}
		// 		}
		// 	},
		// 	//是否设置外边框
		// 	border: {
		// 		type: Boolean,
		// 		default: false
		// 	},
		// 	index: {
		// 		type: Number,
		// 		default: 0
		// 	}
		// },
	}
</script>

<style scoped>
	
</style>
