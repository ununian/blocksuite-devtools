import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'primevue/resources/themes/aura-light-green/theme.css'
import 'uno.css'
import './styles/main.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())

app.mount('#app2')
