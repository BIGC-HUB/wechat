var app = getApp()
Page({
    data: {
    imgUrls: [
      'http://i3.mifile.cn/a4/xmad_14924228925772_WRpTQ.jpg',
      'http://i3.mifile.cn/a4/xmad_14917471739205_EgXRY.jpg',
      'http://i3.mifile.cn/a4/xmad_14917472556483_dUXkz.jpg',
      'http://i3.mifile.cn/a4/xmad_14926930285634_rFZyK.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    userInfo: null,
    name: 'Hasaki'
    },
    onLoad: function () {
        var that = this
        wx.login({
            success: function () {
                wx.getUserInfo({
                    withCredentials: false,
                    success: function (res) {
                        that.setData({
                            userInfo: res.userInfo
                        })
                    }
                })
            }
        })
    },
    changeName: function() {
        this.setData({
            name: '大香蕉'
        })
    },
    nextPage: function() {
        wx.switchTab({
            url: '../logs/log'
        })
        // wx.navigateTo({
        //     url: '../logs/logs'
        // })
    }
})
