import type { Slots, Slot, VNode } from 'vue'

export type Content = boolean | string | number | null | VNode

export function renderSlot(
  slots: Slots,
  name: string,
  props: Record<string, unknown>,
  fallback: Slot | ((...args: unknown[]) => Content[])
): VNode[] | null {
  const slot = slots[name] || (fallback as Slot)
  return typeof slot === 'function' ? slot(props) : null
}
