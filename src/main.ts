import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api'
import { options, register } from '@/utils/elementPlus'

const app = createApp(App)

app.config.globalProperties.$api = api
app.config.globalProperties.$ELEMENT = options
//
register(app)

app.use(store).use(router).mount('#app')
