import { createApp } from 'vue'
import App from './App.vue'
import './scss/main.scss'
import 'virtual:windi.css'
const app = createApp(App)

import { BIconTrash, BIconXLg, BIconPencilSquare, BIconCheckLg } from 'bootstrap-icons-vue'
app.component('BIconTrash', BIconTrash)
app.component('BIconXLg', BIconXLg)
app.component('BIconPencilSquare', BIconPencilSquare)
app.component('BIconCheckLg', BIconCheckLg)
app.mount('#app')
