# 快速上手

### 安装

目前支持 npm 或 yarn 的方式安装，它能更好地和 [webpack][webpack] 打包工具配合使用。

```bash
# with npm
npm install vui -S

# with yarn
yarn add vui
```

### 引入

在 `main.js` 中写入如下内容：

```javascript
import { createApp } from 'vue';

import VueUI from 'vui'
import 'vui/dist/index.css'

import App from './App.vue'

createApp(App)
  .use(VueUI)
  .mount('#app')
```

### 修改 css 前缀

在 `main.js` 中写入如下内容：

```javascript
import { createApp } from 'vue';

import VueUI from 'vui'
import 'vui/dist/index.css'

import App from './App.vue'

createApp(App)
  .use(VueUI)
  .mount('#app')
```

[webpack]: https://webpack.docschina.org/
