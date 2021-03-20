# 校招SSP

## 开发固定流程

1. 看原型图，确定要做的网页
2. 划分组件
3. 写组件
4. 依据接口文档，在fastmock上写测试api
5. 前端套进去

## 接口调用封装promise

`util/promist`

```js
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
```

部署项目时把BASE_URL改了

## 开发过程中遇到的问题

+ 部分字体太小
![image-20210311170928885](https://gitee.com/xinwuyun/myimage/raw/master/img/image-20210311170928885.png)
+ 职位接口信息不全，如图，缺少标签，缺少领域（如通信）、性质和招的人数

![image-20210311171131325](https://gitee.com/xinwuyun/myimage/raw/master/img/image-20210311171131325.png)

+ 内推接口
  + 发布日期字段名为`inserttime`，而职位接口为`releasetime`，最好与职位接口一致
  + `label`是否对应上图中的标签？如果是类型应该为Array，
  + `images`和`userimage`分别对应哪个图？
  
+ 宣讲会页面下方三个点不会做

  ![image-20210312222115019](https://gitee.com/xinwuyun/myimage/raw/master/img/image-20210312222115019.png)

  + 图片中的信息与接口信息对应不上
  + `\n`的处理方法：`.replace('/\\n/','\n')`

## 测试接口使用的图片

![头像](https://gitee.com/xinwuyun/myimage/raw/master/img/头像.png)

![huawei](https://gitee.com/xinwuyun/myimage/raw/master/img/huawei.png)

