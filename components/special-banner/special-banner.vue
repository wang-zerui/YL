<template>
  <div class="banner-container">
    <swiper :style="{width: '100vw', height: '900rpx'}" 
      :indicator-dots="swiperConfig.indicatorDots" 
      indicator-color="#9f9f9f" 
      indicator-active-color="#282828"
      :autoplay="swiperConfig.autoplay" 
      :interval="swiperConfig.interval" 
      :duration="swiperConfig.duration" 
      :circular="swiperConfig.circular"
      :previous-margin="swiperConfig.previousMargin"
      :next-margin="swiperConfig.nextMargin"
      @change="swiperChange" 
      @animationfinish="animationfinish">
      <swiper-item v-for="(item, i) in bannerList" :key="i">
		<!-- 1.当前展示为第1项时，bannerList最后一项和第二项的justifyContent值分别为flex-end和flex-start，其余项值为center -->
		<!-- 2.当前展示为最后一项时，bannerList倒数第2项和第1项的justifyContent值分别为flex-end和flex-start，其余项值为center -->
		<!-- 3.当前展示为其他项（非第1和最后1项）时，bannerList当前项的前1项和后1项的justifyContent值分别为flex-end和flex-start，其余项值为center -->
		<!-- 4.padding值也需要根据不同项设定不同值，但理同justifyContent -->
        <div class="image-container" 
			:class="[curIndex===0?((i===listLen-1)?'item-left':(i===1?'item-right':'item-center')):(curIndex===listLen-1?(i===0?'item-right':(i===listLen-2?'item-left':'item-center')):(i===curIndex-1?'item-left':(i===curIndex+1?'item-right':'item-center')))]">
          <view 
            class="slide-image" 
            :style="{
              transform: curIndex===i?'scale(' + scaleX + ',' + scaleY + ')':'scale(1,1)',
              transitionDuration: '.3s',
              transitionTimingFunction: 'ease'
            }" 
            @click="getBannerDetail(i)">
						
						<!-- 宣讲会卡片开始 -->
						<view class="test">
							<view class="header">
								<!-- 头像 -->
								<image :src="image.url" class="avator"></image>
								<!-- 头像结束 -->
								<view class="title">{{item.title}}</view>
							</view>
							<view class="content">
								{{content}}
							</view>
								<view class="footer">
									<view class="footer-row">
										<view class="footer-row-left">地点：</view>
										<view class="footer-row-right">{{item.location}}</view>
									</view>
									<view class="footer-row">
										<view class="footer-row-left">时间：</view>
										<view class="footer-row-right">{{item.starttime.date}}{{item.starttime.time}}</view>
									</view>
								</view>
							</view>
						</view>
						<!-- 宣讲会卡片结束 -->
						</view>
        </div>
      </swiper-item>
    </swiper>
    <!-- <div class="desc-wrap" :class="[isDescAnimating?'hideAndShowDesc':'']">
      <div class="title">{{bannerList[descIndex].title}}</div>
      <div class="desc">{{bannerList[descIndex].description}}</div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
	bannerList: {
		type: Array,
		default () {
			return []
		}
	},
	image: {
		type: Object,
		default () {
			return {
				url: "../../static/avator.png"
			}
		}
	},
	swiperConfig: {
		type: Object,
		default () {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 3000,
				duration: 300,
				circular: true,
				previousMargin: '58rpx',
				nextMargin: '58rpx'
			}
		}
	},
	scaleX: {
		type: String,
		default: (634 / 550).toFixed(4)
	},
	scaleY: {
		type: String,
		default: (378 / 328).toFixed(4)
	}
  },
  computed:{
	listLen () {
		return this.bannerList.length
	}
  },
  data () {
    return {
      curIndex: 0,
      descIndex: 0,
      isDescAnimating: false,
			content: "在互联网时代，JAVAEE技术体系毫无疑问地成为了服务器端编程领域的王者，可以从事金融、互联网、电商医疗等行业的核心软件开发系统。本次招聘的岗位全部采用企业定制式培养，入训学生学习结束，统一安排在园区工作。",
    }
  },
  methods: {
    swiperChange (e) {
      const that = this
      this.curIndex = e.mp.detail.current
      this.isDescAnimating = true
      let timer = setTimeout(function () {
        that.descIndex = e.mp.detail.current
        clearTimeout(timer)
      }, 150)
    },
    animationfinish (e) {
      this.isDescAnimating = false
    },
    getBannerDetail (index) {
	  // uni.showLoading({
			// title: '将前往详情页面',
			// duration: 20,
			// mask: true
	  // })
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
	border: solid 1rpx;
	border-radius: 6rpx;
	height: 709rpx;
	background-color: #f2f2f2;
}
.header {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.title {
	font-size: 32rpx;
	font-weight: bold;
	margin-top: 34rpx;
}
.avator {
	margin-top: 40rpx;
	height: 100rpx;
	width: 100rpx;
}
.content {
	font-size: 22rpx;
	line-height: 45rpx;
	text-indent: 2em;
	padding: 45rpx;
	padding-bottom: 0rpx;
}
.footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 45rpx;
	padding-top: 15rpx;
}
.footer-row {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	font-size: 28rpx;
	padding: 15rpx;
	padding-top: 0rpx;
}
.footer-row-left {
	width: 85rpx;
	height: 60rpx;
}
.footer-row-right {
	width: 300rpx;
	height: 60rpx;
}

// .table-left {
// 	width: 60rpx;
// }
// .table-right {
// 	width: 280rpx;
// }
.banner-container {
  width: 100vw;
	height: 1000rpx;
  // height: 524rpx;
  .image-container {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	display: flex;
	.slide-image {
	  width: 550rpx;
	  height: 328rpx;
	  z-index: 200;
	}
  }
  .item-left {
	justify-content: flex-end;
	padding: 56rpx 26rpx 0 0;
  }
  .item-right {
	justify-content: flex-start;
	padding: 56rpx 0 0 26rpx;
  }
  .item-center {
	justify-content: center;
	padding: 56rpx 0 0 0;
  }
  .desc-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 98rpx;
    padding: 24rpx 66rpx 0;
    .title {
      width: 100%;
      height: 42rpx;
      line-height: 42rpx;
      color: #222222;
      font-size: 30rpx;
      font-family: 'PingFangTC-Regular';
      font-weight: 600;
      text-align: left;
    }
    .desc {
      margin-top: 4rpx;
      width: 100%;
      height: 34rpx;
      line-height: 34rpx;
      color: #999999;
      font-size: 24rpx;
      font-family: 'PingFangTC-Regular';
      text-align: left;
    }
  }
  @keyframes descAnimation {
    0% {
      opacity: 1;
    }
    25% {
      opacity: .5;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes descAnimation {
    0% {
      opacity: 1;
    }
    25% {
      opacity: .5;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
  .hideAndShowDesc {
    animation: descAnimation .3s ease 1;
    -webkit-animation: descAnimation .3s ease 1;
  }
}
</style>
