<template>
	<view>
		<!-- 标题 -->
		<view class="title">
			<input type="text" 
			:placeholder="title.placeholder" v-model="title.content" :maxlength="-1"/>
		</view>
		<!-- 标题结束 -->
		
		<!-- 内推详情 -->
		<view class="detail">
			<textarea type="text"
			 :placeholder="detail.placeholder"
			 :maxlength="detail.maxlength"
			 v-model="detail.content"/>
				<uni-file-picker 
				v-model="imageValue" 
				limit="9" 
				file-mediatype="image"
				@select="select" 
				@progress="progress" 
				@success="success" 
				@fail="fail" 
				></uni-file-picker>
		</view>
		<!-- 内推结束 -->
		<!-- 分割线 -->
		<view class="line-between"></view>
		<!-- 分割线结束 -->
		
		<!-- 添加标签 -->
		<view class="labels">
			<view class="labels-title">添加标签</view>
			<view class="labels-input">
				<view class="label" v-for="label in labels" >
					<input
					v-model="label.content"
					:placeholder="label.placeholder"
					:style="{'background-color':label.backgroundColor}"/>
				</view>
				<view class="foot-fixed">
					发布
				</view>
			</view>
		</view>
		<!-- 添加标签结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: {
					content:"",
					placeholder:"请输入标题（如：xx公司xx届实习内推）",
					maxlength: -1,
				},
				detail: {
					placeholder: "请输入内推详情及联系方式",
					content: "",
					maxlength: 200,
				},
				imageValue: [],
				labels: [
					{
						placeholder: "城市",
						content: "",
						backgroundColor: "#fcbf3e",
					},{
						placeholder: "公司/部门",
						content: "",
						backgroundColor: "#fd7969",
					},{
						placeholder: "春招/秋招",
						content: "",
						backgroundColor: "#d695e7",
					},
				]
			}
		},
		methods: {
			// 获取上传状态
			select(e){
					console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(e){
					console.log('上传进度：',e)
			},
			// 上传成功
			success(e){
					console.log('上传成功')
			},
			// 上传失败
			fail(e){
					console.log('上传失败：',e)
			},
		},
		onBackPress(options) {
			if(options.from == "navigateBack"){
				return false;
			}else{
				uni.showModal({
				    title: '提示',
				    content: '返回后文字无法恢复，是否返回？',
						cancelText: "我再想想",
						confirmText: "是",
				    success: function (res) {
				        if (res.confirm) {
				            // console.log('用户点击确定');
										uni.navigateBack();
				        } else if (res.cancel) {
				            // console.log('用户点击取消');
										return true;
				        }
				    }
				});
				return true;
			}
		},
	}
</script>

<style>
.title,
.detail,
.labels {
	padding-left: 55rpx;
	padding-right: 55rpx;
}
	
.title {
	display: flex;
	align-items: center;
	height: 105rpx;
	font-size: 32rpx;
	border-bottom: solid 8rpx #f2f2f2;
}
.title input {
	width: 100%;
}

.detail {
	padding: 50rpx 55rpx 80rpx;
}
.detail textarea {
	font-size: 32rpx;
	line-height: 50rpx;
	height: 195rpx;
}

.line-between {
	height: 1rpx;
	width: 680rpx;
	background-color: #d7d7d7;
	margin: 0 auto;
}
.labels {
	margin-top: 38rpx;
}
.labels-title {
	font-size: 32rpx;
	color: #7F7F7F;
	margin-bottom: 29rpx;
}
.labels-input {
	display: flex;
}
.label input,
.label {
	flex: 1;
	font-size: 30rpx;
	font-weight: 600;
	text-align: center;
	border-radius: 10rpx;
	width: 187rpx;
	height: 59rpx;
}
.label input {
	margin: 0 auto;
}
.foot-fixed {
	position: fixed;
	bottom: 0rpx;
	left: 0rpx;
	height: 98rpx;
	line-height: 98rpx;
	width: 100%;
	font-size: 32rpx;
	text-align: center;
	background-color: #6086f1;
}
</style>
