import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Logger from './libs/util.log'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import './assets/tailwind.css'

// // uno.css
// import 'virtual:uno.css'

// import TeaDesign from 'tea-design'
// import 'tea-design/dist/style.css'
import "tailwindcss/tailwind.css"

/*权限管理，如果不需要就不用引入*/
import '@/access/index.ts'
import '@/plugins/axios.ts'

/*评论组件库*/
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
// app.use(TeaDesign)
app.use(UndrawUi)

Logger.capsule(import.meta.env.VITE_APP_WEB_TITLE, import.meta.env.VITE_APP_WEB_VERSION)
Logger.capsule('当前环境', import.meta.env.MODE)
Logger.admin()

app.mount('#app')


