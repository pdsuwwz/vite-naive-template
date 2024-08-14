import request from '@/utils/request'

export function login (data) {
  // return request.post('/login', data)

  return {
    error: 0,
    msg: 'ok',
    data: {
      language: 'en',
      user: {
        email: 'admin@org.com',
        phone: '15290788137',
        username: '管理员',
        id: '601d85900f43923hffbcs',
        token: '4v8acea-6a89-2a2ebc-10802-9ac19003'
      }
    }
  }
}
export function logout () {
  // return request.post('/logout')
  return {}
}

export function getUserInfoData(params = {}) {
  // return request.get('/user_info', params)
  return {
    error: 0,
    msg: 'OK',
    data: {
      language: 'en',
      user: {
        email: 'admin@org.com',
        phone: '15290788137',
        username: '管理员',
        id: '601d85900f43923hffbcs',
        token: '4v8acea-6a89-2a2ebc-10802-9ac19003'
      }
    }
  }
}

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
