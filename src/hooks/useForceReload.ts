import { useChangeNotifyPlacement } from '@/provider/context'

/**
 * 强制刷新 Layout View 路由
 */
export type ReloadRouterViewApiInjection = () => void
export const reloadRouterViewInjectionKey: InjectionKey<ReloadRouterViewApiInjection> = Symbol()

export const useRegisterForceReload = () => {
  const isRouterAlive = ref(true)

  const { changeNotifyPlacement } = useChangeNotifyPlacement()
  const reloadRouterView = () => {
    isRouterAlive.value = false
    nextTick(() => {
      changeNotifyPlacement('bottom-right')
      window.$ModalNotification.destroyAll()
      window.$ModalNotification.success({
        title: '页面刷新成功',
        duration: 800,
        closable: true
      })
      isRouterAlive.value = true
    })
  }

  provide(reloadRouterViewInjectionKey, reloadRouterView)

  return {
    isRouterAlive,
    reloadRouterView
  }
}

export const useApplyForceReload = () => {
  const reloadRouterView = inject(reloadRouterViewInjectionKey)!

  return {
    reloadRouterView
  }
}
