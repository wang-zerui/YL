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
				//info用于组件card测试
				infos: []
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
				console.log("点击卡片", value.index, "该做跳转了");
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
</style>
