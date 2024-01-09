import { resolve } from 'path'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import viteCompression from 'vite-plugin-compression'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log(env)
  return {
    plugins: [
      vue(),
      // .jsx .tsx 支持
      vueJsx({}),
      AutoImport({
        resolvers: [VantResolver()],
        dts: true
      }),
      Components({
        resolvers: [VantResolver()],
        dts: false
      }),
      viteCompression({}),
      UnoCSS()
    ],
    optimizeDeps: {},
    esbuild: {
      pure: ['console.log', 'debugger']
    },
    build: {
      target: 'modules',
      sourcemap: false
    },
    server: {
      cors: true,
      port: Number(env.VITE_APP_PORT),
      host: '0.0.0.0',
      open: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_PROXY_URL,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
        }
      }
    },
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    }
  }
}
