// pages/classic/classic.js
import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
let classicModel=new ClassicModel()
let likeModel=new LikeModel()
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true, 
    first:false,
    likeCount:0,
    likeStatus:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      // this._getLikeStatus(res.id,res.type)
      this.setData({
        classic:res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  onLike:function(event){
    console.log(event)
    let behavior=event.detail.behavior
    likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
  },
  onNext:function(event){
    this._getClassic('next')
  },
  _getClassic: function (nextOrPrevious){
    let index = this.data.classic.index
    classicModel.getPrevious(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id,res.type)
      //console.log(res)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)

      })
      // console.log(this.data)
      //latestClassic latestIndex currentClassic currentIndex
    })
  },
  onPrevious:function(event){
   this._getClassic('previous')
  },
 
  _getLikeStatus:function(artID,category){
    likeModel.getClassicLikeStatus(artID, category,(res)=>{
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    }) 
  }
})