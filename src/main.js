import 'element-plus/dist/index.css'
import './App.stylus'
import './Tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App).use(ElementPlus, { locale: zhCn }).use(router).mount('#app')
