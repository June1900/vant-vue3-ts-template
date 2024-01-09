import { Preset } from 'unocss'

export const myPreset: Preset = {
  name: 'my-preset',
  rules: [
    [/^m-(\d+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-(\d+)$/, ([_, num]) => ({ padding: `${num}px` })]
  ],
  variants: [
    /* ... */
  ],
  shortcuts: [
    /* ... */
  ]
  // ...
}
