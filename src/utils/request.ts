/**
 *Created by DAHU123 <986220912@qq.com> on 2020/12/30
 */
import axios from 'axios'
import store from '../store'

const service = axios.create({
  // baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 60000
})

service.interceptors.request.use((config: any) => {
  if (!(config.url.indexOf('/login') > -1)) {
    // config.headers['Authorization'] = getToken()
    // config.headers['Authorization'] = 324565465465
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errcode === 50000) {
      const message = res.errMsg || res.errmsg
      console.error(message)
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }

    // token认证失败，token传递错误
    if (res.errCode === 10110002) {
      const message = res.errMsg || res.errmsg
      console.error(message)
      store.dispatch('loginOutSystem')
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }

    // 登录接口请求成功
    if (res.errCode !== undefined && res.errCode === 0) {
      return response.data
    }

    // 登录接口请求失败
    if (res.errCode !== undefined && res.errCode !== 0) {
      const message = res.errMsg || res.errmsg
      console.error(message)
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }

    return response.data
  },
  error => {
    const message = error.message
    console.error(message)
    return Promise.reject(error)
  }
)

export default service
