import path from 'path'
import { defineConfig } from 'vitest/config'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCSS from 'unocss/vite'
import UnpluginIcons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { loadEnv } from 'vite'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml (html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>Vite Naive Template</title>'
      )
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_ROUTER_MODE === 'hash'
      ? ''
      : '/',
    server: {
      port: 4567
      // According to the need to open proxy
      // proxy: {
      //   '/api': {
      //     target: 'http://172.xx.xxx.xx/xxxxxxx/api',
      //     changeOrigin: true,
      //     ws: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    plugins: [
      UnoCSS(),
      vue(),
      vueJsx(),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue\??/
        ],
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          'pinia',
          {
            'vue': [
              'createVNode',
              'render'
            ],
            'vue-router': [
              'createRouter',
              'createWebHistory',
              'createWebHashHistory',
              'useRouter',
              'useRoute'
            ],
            'uuid': [
              ['v4', 'uuidv4']
            ],
            // 全局使用 _.xxxx()
            'lodash-es': [
              // default imports
              ['*', '_'] // import { * as _ } from 'lodash-es',
            ],
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          },
          // type import
          {
            from: 'vue',
            imports: [
              'App',
              'VNode',
              'ComponentPublicInstance',
              'ComponentPublicInstanceCostom',
              'ComponentInternalInstance'
            ],
            type: true
          },
          {
            from: 'vue-router',
            imports: [
              'RouteRecordRaw',
              'RouteLocationRaw',
              'LocationQuery',
              'RouteParams',
              'RouteLocationNormalizedLoaded',
              'RouteRecordName',
              'NavigationGuard'
            ],
            type: true
          },
          {
            from: 'naive-ui',
            imports: [
              'NotificationPlacement'
            ],
            type: true
          }
        ],
        resolvers:
          mode === 'development'
            ? []
            : [NaiveUiResolver()],
        dirs: [
          './src/hooks',
          './src/modules/**/store'
        ],
        dts: './auto-imports.d.ts',
        eslintrc: {
          enabled: true
        },
        vueTemplate: true
      }),
      Components({
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        dirs: [
          './src/components'
        ],
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/
        ],
        resolvers: [
          IconsResolver({
            prefix: 'AutoIcon'
          }),
          NaiveUiResolver()
        ]
      }),
      // Auto use Iconify icon
      UnpluginIcons({
        autoInstall: true,
        compiler: 'vue3',
        scale: 1.2,
        defaultStyle: '',
        defaultClass: 'unplugin-icon'
      }),
      htmlPlugin()
    ],
    // https://esbuild.github.io/api/#drop
    // https://github.com/vitejs/vite/discussions/7920#discussioncomment-2709119
    // https://www.google.com/search?q=vite+drop+console&sxsrf=ALiCzsa6WkY53gPLDvBTLVTfM7zaLJ1tjw%3A1662651252168&source=hp&ei=dAsaY9qpB4b70ATE85j4DQ&iflsig=AJiK0e8AAAAAYxoZhMtc6cBdw95TnMDcXKsgc3Hi7NqR&ved=0ahUKEwjas5LKwoX6AhWGPZQKHcQ5Bt8Q4dUDCAc&uact=5&oq=vite+drop+console&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBOgUIABCABDoFCC4QgAQ6CwguEIAEEMcBENEDOgQIIxAnUABYkBVg0RZoAHAAeACAAYgDiAGXCpIBBTItMi4ymAEAoAEBoAEC&sclient=gws-wiz
    /**
     * Replace rollup-plugin-terser with drop of esbuild
     * 用 esbuild.drop 替换 rollup-plugin-terser
     */
    esbuild: {
      drop: [
        'console',
        'debugger'
      ]
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    define: {
      'process.env.VITE_ROUTER_MODE': JSON.stringify(env.VITE_ROUTER_MODE)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/naive-variables.scss' as *;`
        }
      }
    },
    test: {
      globals: true,
      dir: '__tests__',
      environment: 'jsdom',
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }
  }
})
