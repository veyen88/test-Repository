 // pages/books/books.js
import {BookModel} from '../../models/book.js'
const bookModel=new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    searching:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //Promise 对象
    //对象保存状态
    //Promise第一步，new出来接收一个参数（函数）
    //把异步代码写在promise接收的函数中
    const hotList=bookModel.getHotList()
    hotList.then(res=>{
      console.log(res)
      this.setData({
        books:res
      })
    })
 
    // const promise=new Promise((resolve,reject)=>{
    //   wx.getSystemInfo({
    //     success: (res) =>{
    //       resolve(res)
    //     },
    //     fail:(error)=>{
    //       reject(res)
    //     }
    //   })
    // })
    // promise.then((res)=>{
    //   console.log(res)
    // },(error)=>{
    //   console.log(error)
    // })

  },

  onSearching(event){
    this.setData({
      searching:true
    })
  },
  onCancel(event){
    this.setData({
      searching:false
    })
  }

})