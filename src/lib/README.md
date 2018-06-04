# vue-sc-toast


   * @param {String} content  必填 |提示内容
   * @param {String} type  必填 | 暂时支持'warn', 'success'
   * @param {Object} param3  选填 | 设置按钮文字，是否展示取消按钮， showCancel:默认true; confirmButtonText默认：确定; cancelButtonText默认：取消
   * @param {Function} confimFn  选填 | 点击确认按钮回调
   * @param {Function} cancelFn  选填 | 点击取消按钮回调


```

	this.$LToast('1234', '提示', {
	  showCancel: false,
	  confirmButtonText: 'ceshi',
	  cancelButtonText: '请问去'
	}, ()=>{
	  console.log('确定')
	}, ()=> {
	  console.log('取消')
	})

```

- main.js引入 ` Vue.use(LToast) `
