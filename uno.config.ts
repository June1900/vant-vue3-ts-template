// uno.config.ts
import { defineConfig } from 'unocss'
import { myPreset } from './my-preset'

export default defineConfig({
  // ...UnoCSS选项
  presets: [
    myPreset // 您自己的预设
  ]
})
