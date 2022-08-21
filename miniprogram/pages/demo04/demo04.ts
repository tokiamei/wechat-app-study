// pages/demo04/demo04.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1
  },
  /* 输入事件 */
  inputHandler(event:any) {
    // console.log('🤡🤡🤡');
    // console.log(event.detail.value, this);
    this.setData({
      num: event.detail.value
    })
  },
  /* 按钮点击事件 */
  handleTap(event:any) {
    // console.log('🦄🦄🦄🦄');
    // console.log(event);
    const operation:number = event.currentTarget.dataset.operation
    this.setData({
      num: this.data.num + operation
    })
  }
})