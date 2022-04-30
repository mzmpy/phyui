import Button from './components/Button'
import type { App } from 'vue'

const apis = {
  Button
}

const install = function(app: App): any {
  Object.values(apis).forEach(component => {
    app.component(component.name, component)
  })
}

// 整体导出
const phyui = {
  install
}

export default phyui
export * from './components/types'
