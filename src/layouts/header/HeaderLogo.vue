<template>
  <div @click="clickLogo">
    <div class="side-logo" v-if="isSidebarOpen">
      <img width="36" :src="logo" alt="logo">
      <div class="sys-name">{{ title }}</div>
    </div>
    <div class="side-logo logo-noname" v-else-if="!isSidebarOpen">
      <img width="36" :src="logo" alt="logo">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'

const props = defineProps(
  {
    showLogo: {
      type: Boolean,
      default: true
    },
    isSidebarOpen: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'XBlog'
    }
  }
)
// 定义可触发的事件
const emit = defineEmits(['logo-click'])
const clickLogo = () => {
  emit('logo-click')
}
</script>

<style lang="scss" scoped>
.side-logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  width: 200px;
  cursor: pointer;

  .sys-name {
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: .8rem;
    line-height: 50px;
    text-align: center;
    text-wrap: none;
    width: 100px;
    overflow: hidden;
    font-family: "serif";
  }
}

.logo-noname {
  justify-content: flex-start;
  padding-left: 5px;
}
</style>
