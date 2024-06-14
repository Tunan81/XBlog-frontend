<template>
  <a-layout class="layout-demo">
    <a-layout-sider class="container-sider" theme="light" :collapsed="!isSidebarOpen" :trigger="null">
      <HeaderLogo :isSidebarOpen="isSidebarOpen" />
      <a-menu
        :default-selected-keys="['home']"
        style="width: 100%;"
        @menu-item-click="onClickMenuItem"
      >
        <a-menu-item key="home">
          <IconHome></IconHome>
          主页
        </a-menu-item>
        <a-menu-item key="dataCenter">
          <icon-computer />
          数据大屏
        </a-menu-item>
        <a-sub-menu key="user">
          <template #title>
            <icon-user />
            用户管理
          </template>
          <a-menu-item key="user/list">用户列表</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="post">
          <template #title>
            <IconEdit></IconEdit>
            帖子管理
          </template>
          <a-menu-item key="post/list">帖子列表</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="3">
          <template #title>
            <icon-computer />
            系统监控
          </template>
          <a-menu-item key="system/onLineUser">在线用户</a-menu-item>
          <a-menu-item key="3_2" disabled>数据监控</a-menu-item>
          <a-menu-item key="3_3" disabled>服务监控</a-menu-item>
          <a-menu-item key="3_4" disabled>缓存监控</a-menu-item>
          <a-menu-item key="3_5" disabled>缓存列表</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px">
        <a-row>
          <a-col flex="45px">
            <icon-menu-fold
              size="18"
              v-if="isSidebarOpen"
              class="trigger"
              style="cursor: pointer;"
              @click="toggleSidebarAt"
            />
            <icon-menu-unfold
              size="18"
              v-else class="trigger"
              style="cursor: pointer;"
              @click="toggleSidebarAt"
            />
          </a-col>
          <a-col flex="auto"
                 class="weather-box"
                 style="display: flex;
                 justify-content: flex-start;
                 margin-top: 20px;
                 align-items: center">
            <iframe name="weather_inc"
                    src="http://i.tianqi.com/?c=code&id=1"
                    width="600" height="25" frameborder="0"
                    marginwidth="0" marginheight="0" scrolling="no">
            </iframe>
          </a-col>
          <a-col flex="100px">
            <a-space style="display: flex;margin: 15px auto 0;">
              <a-avatar :size="36">
                杭秋
                <!--                <img-->
                <!--                  alt="avatar"-->
                <!--                  src="../assets/avatar.png"-->
                <!--                />-->
              </a-avatar>
            </a-space>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>{{ firstMenu }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{ secondMenu }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <a-layout-footer>
          <div style="display: flex; margin: 0 auto">
            <a style="color: #000"> 版权所有© 2023-2024 T&nbsp;|&nbsp;</a>
            <a-link
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
            >渝ICP备2024018479号-1
            </a-link>
          </div>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import router from '@/router'
import { ref, watchEffect } from 'vue'
import { useMenuStore } from '@/stores/menu'
import HeaderLogo from '@/layouts/header/HeaderLogo.vue'


const menuStore = useMenuStore()

const isSidebarOpen = ref(menuStore.isSidebarOpen)

watchEffect(() => {
  isSidebarOpen.value = menuStore.isSidebarOpen
})

const toggleSidebarAt = () => {
  menuStore.toggleSidebar()
}

const firstMenu = ref('主页')
const secondMenu = ref('')
const onClickMenuItem = (key) => {
  //Message.info(`Click on item ${key}`);
  // 获取key的前缀 / 以前的字符
  const first = key.split('/')[0]
  // 获取key的后缀 / 以后的字符
  const second = key.split('/')[1]
  switch (first) {
    case 'home':
      firstMenu.value = '主页'
      secondMenu.value = ''
      break
    case 'user':
      firstMenu.value = '用户管理'
      switch (second) {
        case 'list':
          secondMenu.value = '用户列表'
          break
        default:
          secondMenu.value = ''
      }
      break
    case 'system':
      firstMenu.value = '系统监控'
      switch (second) {
        case 'onLineUser':
          secondMenu.value = '在线用户'
          break
        default:
          secondMenu.value = ''
      }
      break
    case 'post':
      firstMenu.value = '帖子管理'
      switch (second) {
        case 'list':
          secondMenu.value = '帖子列表'
          break
        default:
          secondMenu.value = ''
      }
      break
  }
  console.log(key)
  router.push({ path: `/admin/${key}` })
}
</script>
<style scoped>
.layout-demo {
  min-height: 100vh;
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

/*.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}*/

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
}
</style>
