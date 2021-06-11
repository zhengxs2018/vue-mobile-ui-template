# Vue Mobile UI

[![TypeScript](https://img.shields.io/badge/lang-typescript-informational?style=flat)](https://www.typescriptlang.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![vue3](https://img.shields.io/badge/vue-3-%2342b983?style=flat)](https://v3.cn.vuejs.org/)
[![vitejs](https://img.shields.io/badge/build-vite-%646cff?style=flat)](https://vitejs.dev/)
[![vuepress2](https://img.shields.io/badge/docs-vuepress2-%3eaf7c?style=flat)](https://vuepress2.netlify.app/)

基于 vue3 & vite & vuepress2 开发的移动端 UI 组件库脚手架。

## 目录结构

```
├── docs/                     // 文档目录，基于 vuepress2
├── mobile/                   // 移动端 demo 工程
├── src/
├── types/
├── tsconfig.build.json       // 组件库编译配置
├── tsconfig.json
├── vite.config.site.ts       // 移动端 demo 启动配置
├── vite.config.ts/           // 组件库编译配置
└── package.json
```

## 本地开发

你需要安装 [Node.js][nodejs] 的版本为 10+.

克隆此仓库后运行:

```bash
# 安装依赖
$ npm install

# 启动文档
$ npm run dev
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 待办事项

- [] 添加测试用例

## 关于代码

代码 fork 自 [vant](https://github.com/youzan/vant)，但将 `less` 转换为 `sass`。

## License

MIT

[nodejs]: https://nodejs.org
