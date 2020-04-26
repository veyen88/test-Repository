// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc:'images/left@dis.png',
    leftSrc: 'images/left.png',
    disRightSrc: 'images/right@dis.png',
    rightSrc: 'images/right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      if(!this.properties.latest){
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(event){
      if (!this.properties.first) {
      this.triggerEvent('right', {}, {})
      } 
    }
  }
})
