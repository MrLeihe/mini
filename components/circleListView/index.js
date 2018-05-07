// components/circleListView/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //图片列表数据（数组）
    avatarList: {
      type: Array,
      value: []
    },
    //图片的宽
    imageWidth: {
      type: Number,
      value: 50
    },
    //图片的高
    imageHeight: {
      type: Number,
      value: 50
    },
    //圆角半径
    borderRadius: {
      type: Number,
      value: 25
    },
    //图片间距
    margin: {
      type: Number,
      value: 15
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
