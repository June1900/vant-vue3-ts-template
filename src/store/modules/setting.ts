import { defineStore } from 'pinia'
import { ConfigProviderTheme } from 'vant'
import { store } from '@/store'

interface UserState {
  // 主题
  theme?: ConfigProviderTheme
}

export const useUserStore = defineStore({
  id: 'app-setting',
  state: (): UserState => ({
    theme: 'light'
  }),
  getters: {},
  actions: {}
})

export function useSettingStoreWithOut() {
  return useUserStore(store)
}
