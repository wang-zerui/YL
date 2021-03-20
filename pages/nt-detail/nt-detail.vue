<template>
	<view v-if="uuid>=0">
		<job-card
		:uuid="item.uuid"
		:title="item.title"
		:company="item.username"
		:collect="item.collect"
		:image="{url: item.userimage}"
		:tags="item.label">
		{{item.inserttime}}
		</job-card>
		<view class="content">
			<view class="title">内推详情</view>
			<view class="detail">
				<text>{{item.content}}</text>
			</view>
		</view>
		<view class="content2">
			<view class="title">内推要求</view>
			<view class="detail">
				<view>学历要求：本科</view>
				<view>毕业年份：{{2022}}</view>
				<view>截止日期：2020-3-15</view>
			</view>
		</view>
		<view class="foot-fixed">
			<view class="foot">
				<view class="foot-left">
					<image :src="item.collect?'../../static/collect-active.png':'../../static/collect.png'"></image>
					<text>收藏</text>
				</view>
				<view class="vline"></view>
				<view class="foot-right" @click="share">
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
				item: {
        uuid: 0,
        title: "",
        images: "",
        inserttime: "",
        label: [],
        openid: 123,
        username: "",
				content: "",
        userimage: "",
        favortie: "",
        collect: true
      },
				uuid: -1
			}
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
						url: '/PUBANDCOLLECT/infer/content',
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
					console.log("调用成功");
					this.item = res.data.data
				}
			},
			share(){
				uni.showToast({
					title: "已发送",
					icon: "none",
					mask: true
				})
			}
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
.content2,
.content {
	padding: 70rpx;
	padding-top: 15rpx;
	padding-bottom: 0rpx;
	line-height: 60rpx;
}
.content2 {
	margin-top: 15;
	margin-bottom: 100rpx;
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
