## $ModalDrawer 示例用法

```tsx
const inst = window.$ModalDrawer.create({
  blockScroll: false,
  title: '测试标题',
  placement: 'left',
  width: '70vw',
  render: () => {
    return <div>
      <p>点击遮罩/右上角关闭按钮触发 onAsyncMaskClick</p>
      <n-button onClick={() => inst.hide()}>直接关闭</n-button>
    </div>
  },
  renderFooter: () => {
    return <n-space>
      <n-button
        type='primary'
        onClick={() => inst.hide()}
      >
      直接关闭
      </n-button>
    </n-space>
  },
  onAsyncMaskClick () {
    // 异步处理
    const loading = window.$ModalMessage.loading('异步关闭中')
    return new Promise((resolve) => {
      setTimeout(() => {
        loading.destroy()
        resolve()
      }, 1000)
    })
  }
})
```