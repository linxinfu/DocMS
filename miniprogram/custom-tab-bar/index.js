Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    allList:[{
      list1: [
        {
          "pagePath": "pages/login/login",
          "iconPath": "/images/icon/home.png",
          "selectedIconPath": "/images/icon/home2.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/addFunction/addFunction",
          "iconPath": "/images/icon/room-key.png",
          "selectedIconPath": "/images/icon/room-key2.png",
          "text": "文献库"
        },
        {
          "pagePath": "pages/statistics/statistics",
          "iconPath": "/images/icon/presentation.png",
          "selectedIconPath": "/images/icon/presentation2.png",
          "text": "借书"
        },
        {
          "pagePath": "pages/user/user",
          "iconPath": "/images/icon/user.png",
          "selectedIconPath": "/images/icon/user2.png",
          "text": "我的"
        }
      ],

      list2: [
        {
          "pagePath": "pages/login/login",
          "iconPath": "/images/icon/home.png",
          "selectedIconPath": "/images/icon/home2.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/addFunction/addFunction",
          "iconPath": "/images/icon/room-key.png",
          "selectedIconPath": "/images/icon/room-key2.png",
          "text": "文献库"
        },
        {
          "pagePath": "pages/statistics/statistics",
          "iconPath": "/images/icon/presentation.png",
          "selectedIconPath": "/images/icon/presentation2.png",
          "text": "统计"
        },
        {
          "pagePath": "pages/user/user",
          "iconPath": "/images/icon/user.png",
          "selectedIconPath": "/images/icon/user2.png",
          "text": "我的"
        }
      ]
    }]

  },
  attached() {
    const roleId = 2
    if (roleId == 20) {
      this.setData({
        list: this.data.allList[0].list1
      })
    }
    else {
      this.setData({
        list: this.data.allList[0].list2
      })
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})