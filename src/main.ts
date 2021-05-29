import { createApp } from 'vue'
import App from './App.vue'
import './scss/main.scss'
import 'virtual:windi.css'

import Unicon from 'vue-unicons'
import { uniTimes, uniEditAlt, uniCheck, uniTrashAlt } from 'vue-unicons/dist/icons'
Unicon.add([uniTimes, uniEditAlt, uniCheck, uniTrashAlt])

createApp(App)
.use(Unicon)
.mount('#app')
