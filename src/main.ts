import 'virtual:uno.css'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupI18n } from '@/locales'

import App from '@/App.vue'

import Fonts from '@/assets/fonts'

import GlobalComponents from '@/components'
import Mixin from '@/mixins'
import Plugins from '@/plugins'

const app = createApp(App)

function setupPlugins() {
  app
    .use(GlobalComponents)
    .use(Plugins)
    .use(Fonts)
    .mixin(Mixin)
}

async function setupApp() {
  setupStore(app)
  await setupI18n(app)
  await setupRouter(app)
  app.mount('#app')
}

setupPlugins()
setupApp()

export default app
