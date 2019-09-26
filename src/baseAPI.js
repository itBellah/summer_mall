/**
 * 封装思想：
 * 就是在 wepy 上再次封装一个方法
 * 【注】 封装一个方法，要写明注释，作用是什么，参数的含义等
 */

import wepy from 'wepy'

// 定义基准根路径。也可封装成对象，对于多接口 API 文档
const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'

/**
 * 弹框提示，一个无图标的 Toast 消息
 * @str 要提示的消息内容，可自定义内容
 * 类型: 字符串
 */
wepy.baseToast = function(str = '获取数据失败') {
  wepy.showToast({
    title: str,
    icon: 'none',
    during: 2000
  })
}

/**
 * 发起 get 请求的 API
 * @url 请求的地址，为相对路径，必须以 / 开头
 * @data 请求的接口参数，默认为空
*/
wepy.get = function(url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    method: 'GET',
    data
  })
}
