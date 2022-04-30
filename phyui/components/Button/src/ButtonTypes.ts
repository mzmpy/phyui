import type { ExtractPropTypes, PropType  } from 'vue'

export type TButtonSize = 'large' | 'medium' | 'small'

export const buttonProps = {
  size: {
    type: String as PropType<TButtonSize>,
    default: 'medium'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
