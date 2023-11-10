import { defineStore } from 'pinia'
import { store } from '@/store'

interface UserState {
  // userInfo: Nullable<UserInfo>
  token?: string
  sessionTimeout?: boolean
  lastUpdateTime: number
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // token
    token: undefined,
    // 登录是否过期
    sessionTimeout: false,
    // 最后一次获取数据时间
    lastUpdateTime: 0
  }),
  getters: {},
  actions: {}
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
