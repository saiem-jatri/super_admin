import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import SelectButton from 'primevue/selectbutton';
import InputSwitch from 'primevue/inputswitch';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.component('Dropdown', Dropdown);
app.component('SelectButton', SelectButton);
app.component('InputSwitch', InputSwitch);
app.mount('#app')

