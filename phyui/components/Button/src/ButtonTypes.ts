import type { ExtractPropTypes, PropType  } from 'vue'

export type TButtonSize = 'lg' | 'md' | 'sm' | 'xs'

export const buttonProps = {
  size: {
    type: String as PropType<TButtonSize>,
    default: 'md'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
