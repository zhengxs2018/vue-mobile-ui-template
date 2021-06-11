import type { App, Component, Plugin } from 'vue'

export type PluginInstallFunction = {
  install(app: App): unknown
}

export function withInstall<T extends Component>(
  options: T
): T & PluginInstallFunction {
  const plugin: Plugin = options as Plugin

  plugin.install = (app: App) => {
    const { name } = options as Component
    app.component(name as string, options)
  }

  return options as T & PluginInstallFunction
}
