import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import registerRouteGuard from './interceptor'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
  routes,
  // 刷新时，滚动条位置还原
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 注册路由守卫
registerRouteGuard(router)

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
