
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

// 对browserHistory二次封装
const routerFilter =  (router) => {  
  let push = router.push
  router.push = function (path, ...args) {
    if (typeof path === 'string') {
      path = path.replace(/\s/g, '')
      try {
        decodeURIComponent(path)
      } catch (e) {
        path = encodeURI(path)
      }
    }
    push(path, ...args)
  }
  return router
}
const router = routerFilter(history)

export default router