import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router'
import 'hover.css/css/hover-min.css';

import { date, currency } from './methods/filter'


const app = createApp(App)


app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.use(CKEditor)
app.config.globalProperties.$filters = {
    date,
    currency
}


app.component('VueLoading', Loading)

app.mount('#app')
