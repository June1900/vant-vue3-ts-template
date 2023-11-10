import { isNavigationFailure, NavigationFailureType, Router } from 'vue-router'

const registerRouteGuard = (router: Router) => {
  /**
   * 全局前置守卫
   */
  router.beforeEach((to, from, next) => {
    console.log('to==>', to)
    console.log('from==>', from)
    next()
  })

  /**
   * 全局解析守卫
   */
  router.beforeResolve(_ => {})

  /**
   * 全局后置守卫
   */
  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
      window.location.reload()
    }
  })
}

export default registerRouteGuard
