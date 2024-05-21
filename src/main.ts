import 'virtual:uno.css'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'

import App from '@/App.vue'

import '@/assets/fonts'

import Mixin from '@/mixins'
import Plugins from '@/plugins'

const app = createApp(App)

function setupPlugins() {
  app
    .use(Plugins)
    .mixin(Mixin)
}

async function setupApp() {
  setupStore(app)
  await setupRouter(app)
  app.mount('#app')
}

setupPlugins()
setupApp()

export default app
