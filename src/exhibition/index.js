import '../api/index.js'
import '../api/iconlake.js'

import('./component.js').then((module) => {
  customElements.define('iconlake-exhibition', module.default)
})
