import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.component('Dropdown', Dropdown);
app.mount('#app')

