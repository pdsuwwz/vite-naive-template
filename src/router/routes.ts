import childrenRoutes from '@/router/child-routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: {
      name: 'Project'
    }
  },
  ...childrenRoutes,
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  }
]

export default routes
