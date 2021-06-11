import { isNil, isNumber } from 'lodash-es'

export function addUnit(value?: string | number): string | undefined {
  if (isNil(value)) return undefined
  return isNumber(value) ? `${value}px` : String(value)
}
