<template>
	<view>
		<job-card
		:uuid="job.uuid"
		:title="job.title"
		:company="job.company"
		:collect="job.collect">
			<text>{{field}}（{{nature}}性质）| {{reqNumber}}人</text>
		</job-card>
		<view class="content">
			<view class="title">职位详情</view>
			<view class="detail">
				<text>{{job.content.replace('/\\n/','\n')}}</text>
			</view>
		</view>
		<view class="content2">
			<view class="title">投递要求</view>
			<view class="detail">
				<view>学历要求：{{job.education}}</view>
				<view>毕业年份：{{2020}}</view>
				<view>截止日期：2020-3-15</view>
			</view>
		</view>
		<view class="foot-fixed">
			<view class="foot">
				<view class="foot-left">
					<image :src="job.collect?'../../static/collect-active.png':'../../static/collect.png'"></image>
					<text>收藏</text>
				</view>
				<view class="vline"></view>
				<view class="foot-right">
				<image src="../../static/share.png"></image>
					<text>分享</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				field: "默认领域",
				nature: "默认",
				reqNumber: 10,
				job: {
					content: ""
				},
				uuid: 10
			}
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
						url: '/POANDSE/xdjobs/content',
						data: {
							uuid: this.uuid,
							rd3session: 111,
						},
						header: {
							sessionid: "yhf"
						}
				})
				if(res.success == 0) {
					uni.showToast({
						title: res.title
					})
				}else{
					this.job = res.data.data
				}
			},
		},
		onLoad:function(option){
			this.uuid = option.uuid
			
			if(this.uuid==undefined){
				uni.switchTab({
					url:"../home/home"
				})
			}
		},
		created() {
			this.getData()
		},
	}
</script>

<style>
.content2 {
	margin-top: 15;
	margin-bottom: 100rpx;
}
.content2,
.content {
	padding: 70rpx;
	padding-top: 15rpx;
	line-height: 60rpx;
}
.title {
	font-size: 30rpx;
	font-weight: 530;
}
.detail {
	font-size: 22rpx;
	margin-left: 15rpx;
}
.foot-fixed {
	position: fixed;
	bottom: 0rpx;
	left: 0rpx;
	height: 96rpx;
	width: 100%;
	background-color: #0062CC;
}
.foot {
	display: flex;
	align-items: left;
	justify-content: center;
	width: 100%;
	height: 100%;
	font-size: 28rpx;
}

.vline {
	width: 1rpx;
	height: 100%;
	border: solid 1rpx #000000;
}

.foot-left,
.foot-right {
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.foot-left image {
	height: 46rpx;
	width: 46rpx;
}
.foot-right image {
	height: 46rpx;
	width: 46rpx;
}
</style>
