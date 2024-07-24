import request from '@/utils/request'

export function getProjectList (params) {
  return request.get('/project/list', params)
}

export function getProjectDetail (params) {
  return request.get('/project', params)
}

export function createProject (data) {
  return request.post('/project', data)
}

export function updateDemoTest (data) {
  return request.put(`/demo_test/${ data.demoId }`, data)
}

export function deleteDemoTest (demoId) {
  return request.delete(`/demo_test/${ demoId }`)
}

export function updateTogglePublishStatus (params) {
  return request.put(`/project/toggle_status`, null, {
    params
  })
}
