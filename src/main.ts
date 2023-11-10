import { createApp } from 'vue'
import App from './App.vue'
import 'vant/es/toast/style'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'

const bootstrap = () => {
  const app = createApp(App)
  // 状态管理
  setupStore(app)
  // 注册路由
  setupRouter(app)
  app.mount('#app')
}

bootstrap()
