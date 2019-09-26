// 主要是把业务逻辑分离出来，简化页面代码
import wepy from 'wepy'

export default class Home extends wepy.mixin {
  // 存放当前页面的私有数据
  data = {
    // 轮播图数据，初始为空
    swiperList: [],
    // 分类数据
    cateItems: [],
    // 楼层数据
    floorList: []
  }

  // 生命周期函数，在函数中发送请求
  onLoad() {
    this.getSwiperData()
    this.getCateData()
    this.getFloorData()
  }
  methods = {
    goGoodsList(url) {
      wx.navigateTo({
        url: url
      })
    }
  }

  // 获取轮播图数据函数 , 异步函数--同步写法
  async getSwiperData() {
    const { data: res } = await wepy.get('/home/swiperdata')
    if (res.meta.status !== 200) {
      // 错误消息提示框，用户体验度
      //   return wepy.showToast({
      //     title: '网络超时, 请检查您的网络',
      //     icon: 'none',
      //     during: 2000
      //   })
      return wepy.baseToast('首页-轮播图数据获取失败')
    }
    this.swiperList = res.message
    // 强制页面监听数据变化并赋值
    this.$apply()
  }

  // 获取首页分类数据
  async getCateData() {
    const { data: res } = await wepy.get('/home/catitems')

    if (res.meta.status !== 200) {
      // 错误消息提示框，用户体验度
      return wepy.baseToast('首页-分类数据获取失败')
    }
    this.cateItems = res.message
    // 强制页面监听数据变化并赋值
    this.$apply()
  }

  // 获取首页楼层数据
  async getFloorData() {
    const { data: res } = await wepy.get('/home/floordata')

    if (res.meta.status !== 200) {
      return wepy.baseToast('首页-楼层数据获取失败')
    }
    this.floorList = res.message
    this.$apply()
  }
}
