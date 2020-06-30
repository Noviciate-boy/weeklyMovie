// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  retureFirst:function(){
    
  },
  data: {
    weeklyMovieList:[{
      id:"30271841",
      name:"多哥",
      img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2575882765.webp",
      comment:"是个狼人，比狠人多一点",
      isHighlyRecomment:false
    }, {
        id: "26794435",
        name: "哪吒之魔童降世",
        img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp",
        comment: "小哪吒很可爱，魔丸也很正能量",
        isHighlyRecomment:true
      }, {
        id: "1291561",
        name: "千与千寻",
        img: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.webp",
        comment: "看它！！很好看，宫崎骏的每部都值得看！",
        isHighlyRecomment: true
      }, {
        id: "1292052",
        name: "申肖克的救赎",
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
        comment: "恐惧让你沦为囚犯，希望让你重获自由。",
        isHighlyRecomment: false
      }, {
        id: "26752088",
        name: "我不是药神",
        img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2561305376.webp",
        comment: "只愿世间无疾病，何愁架上药染尘。",
        isHighlyRecomment: true
      }, {
        id: "1292720",
        name: "阿甘正传",
        img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1484728154.webp",
        comment: "人生就像一盒巧克力，你不知道会选中哪一颗。",
        isHighlyRecomment: true
      }, {
        id: "3319755",
        name: "怦然心动",
        img: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p501177648.webp",
        comment: "当你喜欢我的时候，我不喜欢你；当你爱上我的时候，我喜欢上你；当你离开我的时候，我却爱上你；是你走得太快，还是我跟不上你的脚步。",
        isHighlyRecomment: false
      }],
      currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage:function(){
    return{
      title:"每周推荐"
    }
  },
  retureFirst:function(event){
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1
    })
  },
  tpDetail:function(event){
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieId,
    })
  }
})