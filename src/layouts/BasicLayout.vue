<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <span
            class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">XBlog</span>
        </button>
        <div class="flex md:order-2 fadein-bot">
          <div v-if="loginUser.userName !== '未登录' && loginUser.userName !== ''">
            <a-dropdown :trigger="['click', 'hover', 'focus']">
              <div>
                <a-avatar
                  :size="36"
                  :style="{ marginRight: '8px', cursor: 'pointer' }"
                >
                  <img
                    alt="avatar"
                    v-if="
                  loginUser.userAvatar === null || loginUser.userAvatar === ''
                "
                    src="@/assets/fufu.jpg"
                  />
                  <img alt="avatar" v-else :src="loginUser.userAvatar" />
                </a-avatar>
                <a class="ellipsis">{{ loginUser?.userName }}</a>
                <icon-caret-down />
              </div>
              <template #content>
                <a-doption v-if="loginUser.userRole === 'admin'">
                  <a-space @click="$router.push({ path: '/admin/home' })">
                    <icon-computer />
                    <span> 管理后台 </span>
                  </a-space>
                </a-doption>
                <a-doption>
                  <a-space @click="handleLogout">
                    <icon-export />
                    <span> 退出登录 </span>
                  </a-space>
                </a-doption>
              </template>
            </a-dropdown>
          </div>
          <div
            v-else
            style="cursor: pointer; display: flex"
            class="text-text-secondary"
          >
            <a @click="doLogin"> 登录</a>
            <span class="mx-3">或</span>
            <a @click="doRegister">注册</a>
          </div>
          <!--          <a href="http://doc.paimona.top" target="_blank">-->
          <!--            <img class="w-9 rounded-full"-->
          <!--                 src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"-->
          <!--                 alt="github"></a>-->
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                           class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                           aria-current="page">主页
              </router-link>
            </li>
            <li>
              <router-link to="/about"
                           class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                关于
              </router-link>
            </li>
            <li>
              <router-link to="/blog"
                           class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 blog">
                博客文章
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer
    class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
    <nav class="flex justify-around py-4 text-xs">
      <router-link to="/" class="text-gray-300 hover:text-white">主页</router-link>
      <router-link to="/about" class="text-gray-300 hover:text-white">关于</router-link>
      <router-link to="/blog" class="text-gray-300 hover:text-white">博客</router-link>
    </nav>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { UserControllerService } from '@/generated'

// 从pinia中获取用户信息
const router = useRouter()
const userStore = useUserStore()
const { loginUser } = storeToRefs(userStore)

const redirectToHome = () => {
  this.$router.push('/')
}


// 登录
const doLogin = () => {
  if (loginUser.value.userName === '未登录') {
    router.push({
      path: '/user/login'
    })
  }
}

// 注册
const doRegister = () => {
  router.push({
    path: '/user/register'
  })
}

// 退出登录
const handleLogout = () => {
  localStorage.removeItem('satoken')
  UserControllerService.userLogout();
  location.reload()
}

</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #ffdb70;
  border-radius: 5px;
}

::-webkit-scrollbar-button {
  width: 20px;
}

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #ffdb70;
}

nav a.router-link-exact-active:hover {
  color: white;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
