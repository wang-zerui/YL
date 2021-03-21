<template>
	<view class="job-card" @click="handleClick">
		<!-- 卡片上半部分 -->
		<view class="card-header">
			<!-- 卡片标题 -->
			<text class="header-title">{{title}}</text>
			<!-- 职位标签 -->
			<view class="header-tags">
				<view class="header-tag" v-for="(tag, index) in tags" :style="{'background-color':getBgc(index)}">
					{{tag}}
				</view>
			</view>
		</view>
		<!-- 上半部分结束 -->
		<!-- 下半部分 -->
		<view class="card-content">
			<!-- 头像 -->
				<image :src="image.url" class="content-avator"></image>
			<!-- 内容结束 -->
				<!-- 内容 -->
				<view class="content-right">
					<view class="content-right-company">
						<text>{{company}}</text>
					</view>
					<view class="content-right-req">
						<slot></slot>
					</view>
				</view>
				<!-- 内容结束 -->
			</view>
		</view>
		<!-- 下半部分结束 -->
	</view>
</template>

<script>
	export default {
		name: "jobCard",
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
	}
</script>

<style scoped>
	.job-card {
		padding: 50rpx;
		padding-bottom: 0;
		height: 240rpx;
		border-bottom: solid 8rpx #f2f2f2;
	}
	.card-header {
		height: 120rpx;
	}
	.header-title {
		fontSize: 32rpx;
		font-weight: bold;
	}
	.header-tags {
		display: flex;
		justify-content: flex-start;
		margin-top: 20rpx;
	}
	.header-tag {
		display: flex;
		height: 32rpx;
		width: 98rpx;
		align-items: center;
		justify-content: center;
		margin-right: 20rpx;
		border-radius: 12rpx;
		font-size: 16rpx;
		color: #333333;
	}	
	.card-content {
		display: flex;
		height: ;
		justify-content: flex-start;
		align-items: center;
	}
	.content-left {
		height: 88rpx;
		width: 88rpx;
		border-radius: 44rpx;
		background-color: red;
	}
	.content-avator {
		height: 93rpx;
		width: 93rpx;
		border-radius: 44rpx;
	}
	.content-right {
	  display: inline-flex;
		height: 84rpx;
		margin-left: 20rpx;
	  flex-direction: column;
	  justify-content: space-between;
	  align-items: flex-start;
	}
	.content-right .content-right-company {
		font-size: 30rpx;
	}
	.content-right .content-right-req {
		font-size: 18rpx;
		color: "#7f7f7f"
	}
</style>
