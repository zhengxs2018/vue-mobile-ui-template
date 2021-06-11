import path from "path";

import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions, } from 'vuepress'
import type { SidebarGroup } from '@vuepress/theme-default'

const sidebar = [
  <SidebarGroup>{
    text: '开发指南',
    isGroup: true,
    children: ['/guide/start.md']
  },
  <SidebarGroup>{
    text: '基础组件',
    isGroup: true,
    children: ['/component/style.md']
  },
  <SidebarGroup>{
    text: '展示组件',
    isGroup: true,
    children: ['/component/badge.md']
  }
]

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Vue Mobile',
  description: '移动端 UI 组件库',
  themeConfig: {
    navbar: [
      {
        text: '指南',
        link: '/guide/start.md'
      },
      {
        text: '组件',
        link: '/component/style.md'
      }
    ],
    sidebar: {
      '/guide/': sidebar,
      '/component/': sidebar,
    },
    sidebarDepth: 1
  },
  port: 2020,
  plugins: [
    '@vuepress/plugin-search'
  ],
  dest: path.join(__dirname, '../..', 'dist-docs'),
  bundler: '@vuepress/vite',
  bundlerConfig: {}
})

