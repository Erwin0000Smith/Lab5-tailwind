// import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createAppRouter } from './router'
// nprogress
import 'nprogress/nprogress.css'

const app = createApp(App)
const pageLimit = [null, 1, 3, 2, 1]
import { inject } from "@vercel/analytics"
inject()

app.use(createPinia())
app.use(createAppRouter(pageLimit))

app.mount('#app')