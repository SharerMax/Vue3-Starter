import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/normalize.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import './style/common.css'
import 'uno.css'

createApp(App).use(router).mount('#app')
