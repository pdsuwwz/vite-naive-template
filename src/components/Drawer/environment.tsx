import {
  type DrawerProps,
  NDrawer,
  NDrawerContent,
  drawerProps
} from 'naive-ui'

interface DrawerExtraTypes {
  /**
   * 抽屉标题
   */
  title: string

  /**
   * 抽屉内容渲染 VNode
   * @example render: () => h(NButton)
   */
  render?: () => VNode

  /**
   * 抽屉底部内容渲染 VNode
   * @example renderFooter: () => h(NButton)
   */
  renderFooter?: () => VNode

  /**
   * 点击遮罩/右上角关闭按钮触发的异步关闭回调
   */
  onAsyncMaskClick?: () => Promise<void> | void
}

const propsDrawerExtraTypes = {
  internalKey: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  render: {
    type: Function as PropType<() => VNode>,
    default() {
      return () => <div></div>
    }
  },
  renderFooter: {
    type: Function as PropType<() => VNode>
  },
  onAsyncMaskClick: {
    type: Function
  },
  onInternalAfterLeave: {
    type: Function,
    required: true
  }
}


export type DrawerCreateOptions = DrawerProps & DrawerExtraTypes

export const DrawerEnvironment = defineComponent({
  name: 'DrawerEnvironment',
  props: {
    ...drawerProps,
    ...propsDrawerExtraTypes
  },
  setup(props) {

    const visible = ref(false)
    setTimeout(() => {
      visible.value = true
    })

    const hideDrawer = async () => {
      visible.value = false
      Promise.resolve(() => {
        props.onInternalAfterLeave!(props.internalKey)
      })
    }

    return {
      visible,
      hideDrawer
    }
  },
  render() {

    return <NDrawer
      {...this.$props}
      show={this.visible}
      autoFocus={false}
      onUpdateShow={async () => {
        await this.onAsyncMaskClick?.()
        this.hideDrawer()
      }}
    >
      <NDrawerContent
        title={this.title}
        closable
      >
        {{
          default: () => this.render(),
          footer: this.renderFooter
            ? () => this.renderFooter?.()
            : undefined
        }}
      </NDrawerContent>
    </NDrawer>
  }
})
