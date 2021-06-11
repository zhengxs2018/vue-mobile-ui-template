import type { Config } from '@zhengxs/bem'

export const bem: Config = {
  namespace: {
    component: 'md',
  },
  separator: {
    element: '__',
    modifier: '--',
    state: '-',
  },
}

export default {
  bem,
}
