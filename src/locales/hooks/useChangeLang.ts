import { EventBusKey } from '@vueuse/core'

type Params = { langName: string; }
export const ChangeLangKey: EventBusKey<Params> = Symbol('change-lang')

const bus = useEventBus(ChangeLangKey)

// eslint-disable-next-line no-unused-vars
export const useChangeLang = (callback?: (params: Params) => void) => {
  const listener = (params: Params) => {
    callback && callback(params)
  }

  bus.on(listener)

  const removeEvent = () => {
    bus.off(listener)
  }

  return {
    bus,
    removeEvent
  }
}
