<template>
<special-banner 
:banner-list="bannerList" 
:swiper-config="swiperConfig"
></special-banner>
</template>

<script>
export default {
	data() {
		return {
			bannerList: [],
			        swiperConfig: {
			            indicatorDots: true,
			            indicatorColor: 'rgba(255, 255, 255, .4)',
			            indicatorActiveColor: 'rgba(255, 255, 255, 1)',
			            autoplay: false,
			            interval: 3000,
			            duration: 300,
			            circular: true,
			            previousMargin: '58rpx',
			            nextMargin: '58rpx'
			        }
		};
	},
	methods: {
		async getData() {
			const res = await this.$myRequest({
					url: '/POANDSE/seminar',
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
				this.bannerList = res.data.data;
			}
		},
	},
	created() {
		this.getData()
	}
};
</script>

<style>

</style>
