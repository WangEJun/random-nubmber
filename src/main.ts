// import './assets/main.css'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@varlet/ui/es/style'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Varlet).mount('#app')
