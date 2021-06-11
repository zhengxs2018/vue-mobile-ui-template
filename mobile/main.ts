import { createApp } from 'vue'

import VueUI from '@/index'
import '@/index.scss'

import DemoBlock from './components/demo-block.vue'

import App from './App.vue'

import router from './router'

createApp(App)
  .use(VueUI)
  .use(router)
  .component(DemoBlock.name, DemoBlock)
  .mount('#app')
