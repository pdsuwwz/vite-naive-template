import type { getFilterResponse } from '@/store/utils/mixin'

import type { AxiosRequestConfig } from 'axios'

declare module 'vue' {
  /**
   *
   */
  interface ComponentCustomProperties extends Window {
    // ...

  }
}

declare module 'axios' {
  /**
   * Costom Axios Field.
   */
  export interface AxiosRequestConfig {
    redirect?: string
    /**
     * 是否触发浏览器下载弹框，默认会触发（仅限 blob type）
     */
    autoDownLoadFile?: boolean
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    filterResponse: typeof getFilterResponse
  }
}

declare module 'vue-router' {
  export interface RouteMeta {
    title?: string
  }
}

declare global {

  /**
   * `error`: Response Status Code.
   *
   * `data`: Response Body.
   *
   * `msg`: Response Message.
   */
  export interface IRequestData<T> {
    error: number
    data: T
    msg: string
  }


  /**
   * General Object Types.
   */
  type ObjectValueSuite<T = any> = { [key in any]: T }

  interface IRequestSuite {
    get<T = any>(uri: string, params?: ObjectValueSuite, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    post<T = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    put<T = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    patch<T = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    delete<T = any>(uri: string, config?: AxiosRequestConfig): Promise<IRequestData<T>>
  }


  /**
   * Store FilterResponse Callback Type.
   */
  type IStoreFilterCallBack<T> = (res: IRequestData<T>) => Promise<IRequestData<T>> | void

}
export { }
