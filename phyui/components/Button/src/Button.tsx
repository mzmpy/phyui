import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
import { buttonProps, ButtonProps } from './ButtonTypes'
import './Button.less'

export default defineComponent({
  name: 'pButton',
  props: buttonProps,
  setup(props: ButtonProps, ctx: SetupContext) {
    const onClick = () => {
      alert('Button')
    }

    return () => {
      return (
        <button type="button" class="p-button" onClick={onClick}>
          <span class="p-button-content">{ctx.slots.default?.()}</span>
        </button>
      )
    }
  }
})
