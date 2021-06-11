import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import pkg from './package.json'

const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} @${pkg.author.name}.
* Released under the ${pkg.license} License.
*/`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    vueJsx(),
  ],
  build: {
    target: 'es2015',
    outDir: './dist',
    lib: {
      name: 'vui',
      entry: 'src/index.ts',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['@zhengxs/bem', 'vue', 'lodash-es'],
      output: {
        banner,
        globals: {
          vue: 'Vue',
          'lodash-es': '_',
          '@zhengxs/bem': 'BEM',
        },
        exports: 'named',
      },
    },
  },
})
