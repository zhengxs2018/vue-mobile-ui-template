import { defineComponent } from 'vue'
import type { PropType, CSSProperties } from 'vue'

import { isNil, toSafeInteger } from 'lodash-es'

import bem from '../util/bem'
import { addUnit } from '../util/css'
import { renderSlot } from '../util/compile'

const badge = bem('badge')

export default defineComponent({
  name: 'md-badge',

  props: {
    dot: Boolean,
    max: [Number, String] as PropType<string | number>,
    color: String,
    offset: Array as PropType<Array<string | number>>,
    content: [Number, String] as PropType<string | number>,
    showZero: {
      type: Boolean,
      default: true as const,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
  },

  setup(props, { slots }) {
    function renderContent() {
      const content = props.content

      // 如果是空值，直接返回 0
      if (isNil(content) || content === '') return ['0']

      // 如果不是数字或 0
      const num = +content
      if (isNaN(num) || num === 0) return [content]

      // 如果大于最大值
      const max = toSafeInteger(props.max)
      return [max > 0 && num > max ? `${max}+` : num]
    }

    function renderBadge(fixed: boolean) {
      const dot = props.dot
      const content = props.content
      if (dot || props.showZero || (isNil(content) ? false : content !== '')) {
        const style: CSSProperties = {
          background: props.color,
        }

        const offset = props.offset
        if (offset) {
          const [x, y] = offset
          if (fixed) {
            style.top = addUnit(y)
            style.right = `-${addUnit(x)}`
          } else {
            style.marginTop = addUnit(y)
            style.marginLeft = addUnit(x)
          }
        }

        return (
          <div
            class={[badge.component(), badge.mod({ dot, fixed })]}
            style={style}
          >
            {!dot && renderSlot(slots, 'content', {}, renderContent)}
          </div>
        )
      }
    }

    return () => {
      const slot = slots['default']
      if (slot) {
        return (
          <props.tag class={badge.elem('wrapper')}>
            {slot()}
            {renderBadge(true)}
          </props.tag>
        )
      }
      return renderBadge(false)
    }
  },
})
