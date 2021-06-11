import type { App, Plugin, Component } from 'vue'

import { merge } from 'lodash-es'

import config from './config'

import Badge from './badge/index'

const components: Array<Component & Plugin> = [Badge]

export function install(app: App, options?: Partial<typeof config>): void {
  if (options) merge(config, options)

  components.forEach((comp) => {
    if (typeof comp.install === 'function') {
      app.use(comp)
    } else {
      app.component(comp.name as string, comp)
    }
  })
}
