import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'
import AccessEnum from '@/access/accessEnum'
import AdminLayout from '@/layouts/AdminLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export const routes: Array<RouteRecordRaw> = [
  // region 网站标题
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/FrontHome.vue'),
    meta: {
      isPageTitle: true,
      layout: BasicLayout
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About', layout: BasicLayout }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: { title: 'Blog',layout: BasicLayout }
  },
  {
    path: '/read/:category/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog',layout: BasicLayout }
  },
  // endregion 网站标题
  {
    path: '/user',
    name: '用户',
    children: [
      {
        path: '/user/login',
        name: '用户登录',
        component: () => import('@/views/user/UserLoginView.vue')
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: () => import('@/views/user/UserRegisterView.vue')
      }
    ],
    meta: {
      layout: UserLayout
    }
  },
  {
    path: '/admin',
    name: '管理员',
    children: [
      {
        path: '/admin/home',
        name: '管理员主页',
        component: () => import('@/views/admin/AdminHomeView.vue')
      },
      {
        path: '/admin/dataCenter',
        name: '数据大屏',
        component: () => import('@/views/admin/dataCenter/index.vue')
      },
      {
        path: '/admin/user/list',
        name: '用户列表',
        component: () => import('@/views/admin/user/UserListView.vue')
      },
      {
        path: '/admin/post/list',
        name: '帖子列表',
        component: () => import('@/views/admin/post/PostListView.vue')
      }
    ],
    meta: {
      layout: AdminLayout,
      //access: AccessEnum.ADMIN
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/notFound/NotFoundView.vue'),
    meta: {
      layout: EmptyLayout
    }
  },
  {
    path: '/:pathMatch(.*)', // 匹配所有路由
    redirect: '/404'
  }
]
