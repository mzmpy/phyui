import Button from './components/Button/src/Button'
import type { App } from 'vue'

const apis = {
  Button
}

const install = function(app: App): void {
  Object.values(apis).forEach(component => {
    app.component(component.name, component)
  })
}

// 整体导出
const phy = {
  install
}

export default phy
