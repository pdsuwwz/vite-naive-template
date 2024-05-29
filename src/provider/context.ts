import type { InjectionKey } from 'vue'

type NotifyPlacementInjection = (placement: NotificationPlacement) => void

export const notifyPlacementInjectionKey: InjectionKey<NotifyPlacementInjection> = Symbol()

export const useNotifyPlacement = () => {
  const placement = ref<NotificationPlacement>('top-right')

  const emitChangeNotifyPlacement = (pt: NotificationPlacement) => {
    placement.value = pt
  }
  provide(notifyPlacementInjectionKey, emitChangeNotifyPlacement)

  return {
    notifyPlacement: placement
  }
}

export const useChangeNotifyPlacement = () => {
  const changeNotifyPlacement = inject(notifyPlacementInjectionKey)!
  return {
    changeNotifyPlacement
  }
}
