import { config } from '../config.js'
const tips = {
  1: '抱歉,出现了一个错误',
  1005: 'appkey无效,前往设置',
  3000: '期刊不存在'
}
class HTTP {
  request({url,data = {},method="GET"}){
   return new Promise((resolve,reject)=>{
    this._request(url,resolve, reject, data, method)
   })
  }
  _request(url,resolve,reject,data={},method='GET') {
    wx.request({
      url: config.api_base_url +url,
      method: method,
      data:data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        }
        else {
          reject()
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error(1)
      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}
export {HTTP}