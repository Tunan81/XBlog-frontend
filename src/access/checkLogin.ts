import AccessEnum from "@/access/accessEnum";

/**
 * 检查用户是否有权限
 * @param loginUser 登录用户
 * @param needAccess 需要的权限
 */
const checkLogin = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  // 如果用户登录才能访问
  if (loginUserAccess === AccessEnum.USER) {
    if (loginUserAccess === AccessEnum.NOT_LOGIN) {
      return false;
    }
  }
  return true;
};

export default checkLogin;
