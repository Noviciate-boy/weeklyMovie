// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    console.log(options.id)
    this.setData({
      mid: options.id
    })
    var that = this
      wx.request({
        url: 'https://t.yushu.im/v2/movie/subject/' + options.id,
        header: {
          "content-type": "json"
        },
        success: function (res) {
          console.log(res)
          that.setData({
            movie: res.data
          })
          wx.setNavigationBarTitle({
            title: res.data.rating.avarage + "分: " + res.data.title,
          })
          wx.hideNavigationBarLoading()
        }
      })
      wx.showNavigationBarLoading()
  },
  onShareAppMessage: function () {
    return {
      title: "向你推荐：" + this.data.movie.title
    }
  }
})