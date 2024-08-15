import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './localization/i18n.js';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)
app.use(i18n);

app.mount('#app')
