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

import * as Sentry from "@sentry/vue";

const app = createApp(App)


app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.use(CKEditor)
app.config.globalProperties.$filters = {
    date,
    currency
}

Sentry.init({
    app,
    dsn: "https://79f97a591cfe587966543b472f1b061d@o4505922582937600.ingest.sentry.io/4505950821416960",
    integrations: [
        new Sentry.Replay(),
    ],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})



app.component('VueLoading', Loading)

app.mount('#app')
