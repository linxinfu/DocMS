const db = wx.cloud.database()

import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
  data: {
    errMsg: {},
    progress: {
      text: "",
      color: ""
    }
  },

  onLoad: function (options) {

  },

  onChange: function (e) {
    this.setData({
      [e.currentTarget.dataset.prop]: e.detail
    })
  },

  verify: function () {
    let that = this;
    this.setData({
      errMsg: {
        account: that.data.account ? "" : "账号不能为空",
        password: that.data.password ? "" : "密码不能为空"
      }
    })
  },

  login: function () {
    this.verify()
    if (!this.data.account || !this.data.password) return
    // 暂时写死账号密码
    if (this.data.account === "admin" && this.data.password === "123456") {
      wx.navigateTo({
        url: '../index/index',
        // url: '../adminHome/adminHome',
      })
    } else {
      Toast.fail('账号或密码错误');
    }
  },

  wechatLogin: function () {
    Toast.fail('微信登录');
    wx.navigateTo({
      url: '../nav/nav',
    })
  }

})