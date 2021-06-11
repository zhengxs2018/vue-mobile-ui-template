/// <reference path="../../types/vue-sfc-shim.d.ts" />

import { defineClientAppEnhance } from '@vuepress/client'

import Simulator from './components/simulator.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('simulator', Simulator)
})
