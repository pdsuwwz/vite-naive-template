import type { RespData } from '@/utils/request'

type ResponseCallback<T> = (res: RespData<T>) => (typeof res) | any

export function getFilterResponse<T = any>(
  res: RespData<T>,
  successCallback?: ResponseCallback<T> | null,
  errorCallback?: ResponseCallback<T> | null
): Promise<RespData<T>> {
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      successCallback && successCallback(res)
    } else {
      errorCallback
        ? errorCallback(res)
        : window.$ModalMessage?.error(res.msg!, {
          closable: true
        })
    }
    resolve(res)
  })
}
