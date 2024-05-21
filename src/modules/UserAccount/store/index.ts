import { defineStore } from 'pinia'
import { store } from '@/store'

import { sleep } from '@/utils/request'
import {
  getUserInfoData,
  login,
  logout
} from '@/modules/UserAccount/api'

export interface IUserAccountState {
  demoList: any
  userInfo: any
}

export const useUserAccountStore = defineStore('UserAccount', {
  state: (): IUserAccountState => {
    return {
      demoList: {},
      userInfo: {}
    }
  },
  getters: {
    // demoList: state => state.demoList
  },
  actions: {
    async GetModuleTestList (params) {
      // TODO: 模拟响应时间
      await sleep(1000)
      // TODO: 模拟 api
      // const result = await getDemoTestList(params)
      const result = {
        test: 'ok'
      }
      this.demoList = result
      return result
    },
    async login (data) {
      await sleep(200)
      const res = await login(data)
      return this.filterResponse(res, null, () => {})
    },
    async logout () {
      const res = await logout()
      return this.filterResponse(res, null, () => {})
    },
    async getUserInfo () {
      const res = await getUserInfoData()
      await sleep(200)
      return this.filterResponse(res, ({ data }) => {
        this.userInfo = data
      })
    }
  }
})

// Need to be used outside the setup
export function useUserAccountStoreWithOut() {
  return useUserAccountStore(store)
}
