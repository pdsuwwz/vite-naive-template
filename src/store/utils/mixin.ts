import { RespData } from '@/utils/request'

type ResponseCallback = (res: RespData) => (typeof res) | any

export function getFilterResponse(
  res: RespData,
  successCallback?: ResponseCallback | null,
  errorCallback?: ResponseCallback | null
): Promise<RespData> {
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      successCallback && successCallback(res)
    } else {
      errorCallback
        ? errorCallback(res)
        : window.$message.error(res.msg!, {
          closable: true
        })
    }
    resolve(res)
  })
}
