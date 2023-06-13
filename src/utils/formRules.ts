/* eslint-disable */

// import {
//   regexExtraSpace
// } from '@/utils/regularExpression'
import {
  regexEmail,
  regexExtraSpace
} from '@/utils/regularExpression'

function validatorRules(
  validator?: any,
  trigger?: Array<string> | string,
  params?: any
  ): any {
  console.log('value😄')
  const rule = {
    required: true,
    trigger,
    validator: '',
    ...params
  }
  validator ? rule.validator = validator : delete rule.validator
  return rule
}
function requiredRules (params = {}) {
  const { trigger, message } = Object.assign({}, {
    trigger: 'blur',
    message: '请输入'
  }, params)

  return validatorRules((rule: any, value: string) => {
    value = value && value.trim()
    if (!value) {
      return new Error(message)
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        return new Error(message)
      }
    }
    return true
  }, trigger)
}

function requiredRadioRules (params = {}) {
  const { trigger, message } = Object.assign({}, {
    trigger: 'change',
    message: '请选择'
  }, params)
  return validatorRules((rule: any, value: string, callback: any) => {
    if (['boolean', 'number'].includes(typeof value)) {
      callback()
    } else if (value === '' || !value.replace(new RegExp(regexExtraSpace), '')) {
      callback(new Error(message))
    }
  }, trigger)
}
function imageListRules (errMsg = '请上传全部图片') {
  const errSingle = '请选择一张图片'
  const validator = (rule: any, value: any[], callback: any) => {
    if (!value) {
      callback(new Error(errSingle))
    } else if (Array.isArray(value) && value.some((img) => !img.url)) {
      value.length > 1 ? callback(new Error(errMsg)) : callback(new Error(errSingle))
    } else {
      callback()
    }
  }
  return validatorRules(validator)
}

function requiredEmailRules (params = {}) {
  const { trigger, message } = Object.assign({}, {
    trigger: ['input', 'blur'],
    message: '请填写邮箱'
  }, params)

  return validatorRules((rule: any, value: string) => {
    value = value && value.trim()
    if (!value) {
      return new Error(message)
    } else if (!regexEmail.test(value)) {
      return new Error('请输入正确的邮箱地址')
    }
    return true
  }, trigger)
}


export {
  requiredRules,
  validatorRules,
  imageListRules,
  requiredRadioRules,
  requiredEmailRules
}
