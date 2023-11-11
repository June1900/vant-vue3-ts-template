import axios from 'axios'
import { useRouter } from 'vue-router'
import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ContentTypeEnum, RequestEnum, ResultEnum } from '@/config/enums/httpEnum'

const router = useRouter()

const config = {
  // 默认地址
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
  headers: {
    'Content-Type': ContentTypeEnum.JSON
  }
}

const instance: AxiosInstance = axios.create(config)

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('config===>', config)
    const { method, params } = config
    console.log(params)
    let { headers } = config
    // 不缓存get请求
    if (method.toLowerCase() === RequestEnum.GET) {
      const cache = { 'Cache-Control': 'no-cache' }
      // @ts-ignore
      headers = { ...headers, ...cache }
    }
    console.log(headers)
    return {
      ...config,
      headers
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
instance.interceptors.response.use(
  (v: AxiosResponse) => {
    if (v.data?.code === 401) {
      return v.data
    }
    if (v.status === 200) {
      return v.data
    }
    return Promise.reject(v)
  },
  (error: AxiosError) => {
    const { response } = error
    // 根据响应的错误状态码，做不同的处理
    if (response) {
      return checkStatus(response.status)
    }
    // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
    if (!window.navigator.onLine) {
      return router.replace({ path: '/500' })
    }
    return Promise.reject(error)
  }
)

const checkStatus = (status: number): void => {
  console.log(status)
  // switch (status) {
  //   case 400:
  //     ElMessage.error(trans('sys.api.apiRequestFailed'))
  //     break
  //   case 401:
  //     ElMessage.error(trans('sys.api.errMsg401'))
  //     break
  //   case 403:
  //     ElMessage.error(trans('sys.api.errMsg403'))
  //     break
  //   case 404:
  //     ElMessage.error(trans('sys.api.errMsg404'))
  //     break
  //   case 405:
  //     ElMessage.error(trans('sys.api.errMsg405'))
  //     break
  //   case 408:
  //     ElMessage.error(trans('sys.api.errMsg408'))
  //     break
  //   case 500:
  //     ElMessage.error(trans('sys.api.errMsg500'))
  //     break
  //   case 501:
  //     ElMessage.error(trans('sys.api.errMsg501'))
  //     break
  //   case 502:
  //     ElMessage.error(trans('sys.api.errMsg502'))
  //     break
  //   case 503:
  //     ElMessage.error(trans('sys.api.errMsg503'))
  //     break
  //   case 504:
  //     ElMessage.error(trans('sys.api.errMsg504'))
  //     break
  //   case 505:
  //     ElMessage.error(trans('sys.api.errMsg505'))
  //     break
  //   default:
  //     ElMessage.error(trans('sys.api.apiRequestFailed'))
  // }
}

export function getAction<T = any>(url: string, params = {}): Promise<T> {
  return instance.request({
    url,
    method: RequestEnum.GET,
    params
  })
}

export function postAction<T = any>(url: string, params = {}, headers = { 'Content-Type': ContentTypeEnum.JSON }): Promise<T> {
  return instance.request({
    url,
    method: RequestEnum.POST,
    data: params,
    headers
  })
}

export function uploadFile<T = any>(
  url: string,
  params = {},
  timeout = 30,
  headers = { 'Content-Type': ContentTypeEnum.FORM_DATA }
): Promise<T> {
  return instance.request({
    url,
    method: RequestEnum.POST,
    timeout,
    data: params,
    headers
  })
}

export function putAction<T = any>(url: string, params = {}, headers = { 'Content-Type': ContentTypeEnum.JSON }): Promise<T> {
  return instance.request({
    url,
    method: RequestEnum.PUT,
    data: params,
    headers
  })
}

export function deleteAction<T = any>(url: string, params = {}, headers = { 'Content-Type': ContentTypeEnum.JSON }): Promise<T> {
  return instance.request({
    url,
    method: RequestEnum.DELETE,
    params,
    headers
  })
}

export default instance
