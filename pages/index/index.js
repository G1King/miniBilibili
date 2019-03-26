Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    clickCurrentNav:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
  },

  /**
   * 获取导航文字
   */
  
  getNavList(){
   wx.request({
     url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
     success:(r)=>{
       console.log(r);
       this.setData({
         navList:r.data.data.navList
       })
       console.log(this.navList);
     }
   })
  },
  /**
   * 点击导航更改底部线
   */
  clickItem(e){
    this.setData({
      clickCurrentNav:e.target.dataset.index
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
  onShareAppMessage: function () {
    
  }
})