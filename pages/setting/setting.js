const app = getApp();
Page({
  data: {
    isFocus:false,
    notEnough:false,

  },
  onLoad: function (options) {
    
  },
  onShow: function () {
    app.onPageShow();
  },
  //搜索框获取&失去焦点颜色变化
  onBlurFocus:function(){
    this.setData({
      isFocus: !this.data.isFocus
    })
  },
  onInputSth:function(e){
    var val = e.detail.value;
  }
})