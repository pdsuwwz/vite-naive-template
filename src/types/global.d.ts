interface Window {
  $ModalMessage: import('naive-ui').MessageProviderInst
  $ModalNotification: import('naive-ui').NotificationProviderInst
  $ModalDialog: import('naive-ui').DialogProviderInst
  $ModalLoadingBar: import('naive-ui').LoadingBarProviderInst
  $ModalDrawer: import('@/components/Drawer/type').DrawerApiInjection
}

declare namespace FormContainer {
  type Attrs = {
    path: string
    rule: () => any
  }

  interface FormConfigOptions {
    attrs: Attrs
    link?: any
    type?: string
    label: string
    prefixIcon?: Component
    showPasswordOn?: string
    placeholder: string
  }

  type ActionOnEvent = {
    click: (...args: any[]) => any
  }
  interface ActionOptions {
    attrs: any
    text: string
    on: ActionOnEvent
  }

}
