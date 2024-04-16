import { drawerProviderInjectionKey } from './context'

export function useDrawer() {
  const drawerInstance = inject(drawerProviderInjectionKey)
  return drawerInstance!
}
