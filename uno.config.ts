import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons()
  ],
  transformers: [
    transformerDirectives()
  ],
  theme: {
    colors: {
      primary: '#549e23',
      success: '#52c41a',
      warning: '#faad14',
      danger: '#fa5555',
      info: '#909399'
    }
  },
  rules: [
    [
      'navbar-shadow', {
        'box-shadow': '0 1px 4px rgb(0 21 41 / 8%)'
      }
    ],
    [
      'dark-navbar-shadow', {
        'box-shadow': '0 1px 4px rgb(255 255 255 / 16%)'
      }
    ],
    [
      'login-navbar-shadow', {
        'box-shadow': '0 -3px 8px 3px #727272'
      }
    ],
    [
      /^bgimage-(\w+)-(.+)-(svg|png|jpg|gif)$/,
      ([, dir, fname, fext]) => {
        return {
          'background-image': `url(@/assets/${ dir }/${ fname }.${ fext })`
        }
      }
    ]
  ]
})
