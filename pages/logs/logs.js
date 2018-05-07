//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    bar1: {
      text: '浙江温州浙江温州江南皮革厂倒闭了，老板黄鹤吃喝嫖赌欠下1.5亿，带着小姨子跑了',
      scrollable: true,
      color: '#000',
      backgroundColor: '#fff'
    },
    avatarList: [{ avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' }, { avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Is9WGKAc9WE8lVyUNBWeGaEHgLg889UPQ2xxsicdu6y01ArKXyyxWEdT68iaEG7nMAib4lPKUVX2HW5icRp9PfhNuw/132' },]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  showShare: function(){
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享给好友和群聊'],
    })
  },
})
