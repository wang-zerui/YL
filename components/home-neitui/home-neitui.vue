<template>
	<view>
		<view class="inner-header">
				<tui-tabs
				class="inner-header-tabs"
				:currentTab="currentTab>2?0:currentTab"
				:tabs="tabs"
				:width="135"
				:height="45"
				@change="change"
				itemWidth="50%"
				selectedColor="black"
				color="#7f7f7f"></tui-tabs>
		</view>
		<view class="inner-content">
			<job-card v-for="(item,index) in starSortedInfos"
			:uuid="item.uuid"
			:index="index"
			:title="item.title"
			:company="item.username"
			:collect="item.collect"
			:image="{url: item.userimage}"
			:tags="item.label"
			@click="clickCard">
			{{item.inserttime}}
			</job-card>
		</view>
		<view class="write-button" @click="clickWriteButton">
			<image :src="writeButtonUrl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"home-neitui",
		data() {
			return {
				currentTab: 1,
				tabs: [
					{name:"最新"},
					{name:"热门"},
				],
				infos: [],
				writeButtonUrl: "../../static/write.png"
			};
		},
		methods:{
			async getData() {
				const res = await this.$myRequest({
						url: '/PUBANDCOLLECT/infer',
						data: {
							pageIndex: 1,
							rd3session: 111
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
					this.infos = res.data.data;
				}
			},
			change(event) {
				this.currentTab = event.index
			},
			clickCard(value) {
				const nt = this.infos[value.index]
				uni.navigateTo({
					url:"/pages/nt-detail/nt-detail?uuid="+nt.uuid,
				})
			},
			clickWriteButton() {
				uni.navigateTo({
					url:"/pages/write-nt/write-nt",
				})
			}
		},
		computed:{
			starSortedInfos() {
				//return this.infos
				return sortByKey(this.infos, 'favorite')
			}
		},
		created() {
			this.getData()
		}
	}
	//排序算法
	function sortByKey(array, key) {
		return array.sort(function (a, b) {
			var x = a[key];
			var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}
</script>

<style>
	.inner-header {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		border-bottom: solid 1rpx;
		height: 65rpx;
	}
	.write-button {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 66rpx;
		bottom: 160rpx;
		width: 100rpx;
		height: 100rpx;
		padding: 0 0;
		border-radius: 50rpx;
		background-color: #5f86f2;
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
	}
	.write-button image{
		position: relative;
		left: 6rpx;
		bottom: 2rpx;
		width: 70rpx;
		height: 67rpx;
	}
</style>
