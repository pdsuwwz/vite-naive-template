<script setup lang="ts">

import { DrawerProvider, useDrawer } from '@/components/Drawer'

function registerNaiveTools () {
  window.$ModalMessage = useMessage()
  window.$ModalNotification = useNotification()
  window.$ModalDialog = useDialog()
  window.$ModalLoadingBar = useLoadingBar()
  window.$ModalDrawer = useDrawer()
}

const NaiveProviderWrapper = defineComponent({
  name: 'NaiveProviderWrapper',
  setup() {
    registerNaiveTools()
  },
  render() {
    return h('div')
  }
})
</script>

<template>
  <DrawerProvider>
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <slot></slot>
            <NaiveProviderWrapper />
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </DrawerProvider>
</template>
