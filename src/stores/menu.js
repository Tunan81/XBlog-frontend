import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useMenuStore = defineStore('menu', () => {
  const isSidebarOpen = ref(true) // 默认打开侧边栏


  async function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return {
    isSidebarOpen,
    toggleSidebar
  }
})
