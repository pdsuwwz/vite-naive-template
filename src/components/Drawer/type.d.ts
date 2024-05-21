import type { DrawerCreateOptions } from './environment'

export interface DrawerInst {
  /**
   * 直接关闭当前抽屉
   */
  hide: () => void
}

export interface DrawerApiInjection {
  create: (options: DrawerCreateOptions) => DrawerInst
}

