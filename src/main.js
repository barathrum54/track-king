import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'


import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(OpenLayersMap)
app.use(router)

app.mount('#app')
