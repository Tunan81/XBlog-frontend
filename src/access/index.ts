import router from '@/router'
import AccessEnum from '@/access/accessEnum'
import { useUserStore } from '@/stores/user'

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const { getLoginUser } = userStore
  // 如果之前没登录过，自动登录
  let loginUser = userStore.loginUser
  if (!loginUser || !loginUser.userRole) {
    // 加上await，等待登录成功后再跳转
    await getLoginUser()
    loginUser = userStore.loginUser
  }
  const needAccess = (to.meta?.access as string) ?? AccessEnum.NOT_LOGIN
  // 要跳转的页面需要登录
  if (needAccess !== AccessEnum.NOT_LOGIN) {
    // 如果没有登录，跳转到登录页面
    if (!loginUser || !loginUser.userRole || loginUser.userRole === AccessEnum.NOT_LOGIN) {
      next(`/user/login?redirect=${to.fullPath}`)
      return
    }
  }
  // 如果跳转的页面需要管理员权限
  if (needAccess === AccessEnum.ADMIN) {
    // 如果不是管理员，跳转到无权限页面
    if (loginUser.userRole !== AccessEnum.ADMIN) {
      next('/noAuth')
      return
    }
  }
  next()
})
