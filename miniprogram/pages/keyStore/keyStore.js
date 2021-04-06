// miniprogram/pages/keyStore/keyStore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keys:[{
      "name":"Github",
      "create_at":"2020-3-09"
    },{
      "name":"微博",
      "create_at":"2020-3-11"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toAddKey: function(){
    // wx.navigateTo({
    //   url: './addKey/addKey',
    // })
  }
})