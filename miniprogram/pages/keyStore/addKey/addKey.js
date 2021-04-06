// miniprogram/pages/keyStore/addKey/addKey.js
const securityUtils = require('../../../utils/utils.js')
const db = wx.cloud.database()

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

  verify: function () {
    let that = this;
    this.setData({
      errMsg: {
        name: that.data.name ? "" : "名称不能为空",
        account: that.data.account ? "" : "账号不能为空",
        password: that.data.password ? "" : "密码不能为空",
        security: that.data.security ? "" : "主密码不能为空"
      }
    })
  },

  genPassword: function () {
    const password = securityUtils.genKey()
    this.setData({
      password: password
    })
    this.changeProgress()
  },

  addKey: function () {
    this.verify()
    if(!this.data.name||!this.data.account||!this.data.password||!this.data.security) return
    console.log(new Date())
    console.log(this.data.security)
    db.collection('key').add({
      data: {
        name: this.data.name,
        account:this.data.account,
        password:this.data.password,
        remark:this.data.remark,
        level:securityUtils.checkPassWordLevel(this.data.password),
        create_at: new Date()
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        console.log(res)
        wx.showToast({
          title: '新增成功',
        })
      },
      fail: err => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '新增失败'
        })
      }
    })
  },

  onChange: function (e) {
    this.setData({
      [e.currentTarget.dataset.prop]: e.detail
    })
    if (e.currentTarget.dataset.prop === "password") {
      this.changeProgress()
    }
  },

  changeProgress: function () {
    let level = securityUtils.checkPassWordLevel(this.data.password)
    let percent, color
    switch (level) {
      case securityUtils.keyLevel.veryWeak.name:
        percent = 20
        color = '#d9534f'
        break;
      case securityUtils.keyLevel.weak.name:
        percent = 40
        color = '#d9534f'
        break;
      case securityUtils.keyLevel.middle.name:
        percent = 60
        color = '#f0ad4e'
        break;
      case securityUtils.keyLevel.safe.name:
        percent = 80
        color = '#5bc0de'
        break;
      case securityUtils.keyLevel.verySafe.name:
        percent = 100
        color = '#5cb85c'
        break;
      default:
        return
    }

    this.setData({
      progress: {
        text: level,
        color: color,
        percentage: percent
      }
    })
  }
})