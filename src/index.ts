import config from './config'
import { version } from './version'
import { install } from './install'

import Badge from './badge/index'

import bem from './util/bem'
import { renderSlot } from './util/compile'

export {
  version,
  config,
  // Components
  Badge,
  // Utils
  bem,
  renderSlot,
}

export default {
  install,
  config,
  version,
}
