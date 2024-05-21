import { useUserAccountStore } from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/base'

import NProgress from 'nprogress'
import type { Router } from 'vue-router'

NProgress.configure({
  showSpinner: false
})

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userAccountStore = useUserAccountStore()

    NProgress.start()

    document.title = `${ to.meta.title || '' } - ${ systemTitle }`

    console.log('😄😄😄 ', to)

    if (
      allowlist.find(
        name => to.name === name
      )
    ) {
      next()
      return
    }

    if (!Cookie.get('token')) {
      next(`/user/login`)
      return
    }

    // 获取用户信息
    const { data, error } = await userAccountStore.getUserInfo()

    if (error) {
      Cookie.remove('token')
      next(`/user/login`)
      return
    }
    next()
  })

  router.afterEach((to) => {
    NProgress.done()
  })
}
