import request from '@/utils/request'

export function getDemoTestList (params) {
  return request.get('/demo_test/list', params)
}

export function createDemoTest (data) {
  return request.post('/demo_test', data)
}

export function updateDemoTest (data) {
  return request.put(`/demo_test/${ data.demoId }`, data)
}

export function deleteDemoTest (demoId) {
  return request.delete(`/demo_test/${ demoId }`)
}
