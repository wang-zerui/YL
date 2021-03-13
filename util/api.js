//测试用api
const BASE_URL = "https://www.fastmock.site/mock/d6541442e9d1ddb93abfd08c76d6a76b/api"
// 实际使用api
//const BASE_URL = ""
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			header: options.header || {},
			method: options.method || 'GET',
			data: options.data || {},
			success:res => {
				if (res.statusCode !== 200) {
					return uni.showToast({
						title: '获取数据失败',
						icon: "none"
					})
				}
				resolve(res)
			},
			fail:err => {
				uni.showToast({
					icon: "none",
					title: '调用接口失败'
				})
				reject(err)
			}
		})
	})
}