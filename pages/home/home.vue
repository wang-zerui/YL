<template>
	<view>
		<view class="hearder-box">
			<search-btn></search-btn>
		</view>
		<view class="tui-mtop">
			<tui-tabs 
			:tabs="tabs" 
			:currentTab="currentTab>2?0:currentTab" 
			@change="change" 
			itemWidth="33.3333%" 
			backgroundColor="#5f86f2"
			color="#a3bdff"
			selectedColor="white"
			:bold="true"
			:size="38"
			:unlined="true"></tui-tabs>
		</view>
		<view>
			<home-position v-if="0"></home-position>
			<home-neitui v-if="0"></home-neitui>
			<home-seminar v-if="0"></home-seminar>
			<component :is="currentView" ></component>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				tabs: [{
					name: "职位"
				}, {
					name: "内推"
				}, {
					name: "宣讲会"
				}],
				componentsView: ['home-position', 'home-neitui', 'home-seminar'],
			}
		},
		methods: {
			change(event) {
				this.currentTab = event.index
			}
		},
		computed: {
			currentView() {
				return this.componentsView[this.currentTab]
			}
		},
		onLoad() {
		}
	}
</script>

<style>
	.hearder-box {
		background-color: #5f86f2;
		padding: 40rpx;
	}
</style>
