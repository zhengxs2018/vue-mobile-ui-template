import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from './views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
]

// 加载 demo 页面
const demoPages = import.meta.globEager('/src/**/demo/index.vue')
for (const path in demoPages) {
  const name = (/src\/(.*)\/demo\/index.vue/.exec(path) as string[])[1]

  routes.push({
    name,
    path: '/' + name,
    component: demoPages[path].default,
  })
}

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/',
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
