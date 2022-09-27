import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import SidebarNav from '../src/components/SidebarNav.vue'
import TopBarNav from '../src/components/TopBarNav.vue'
import SelectButton from 'primevue/selectbutton';
import InputSwitch from 'primevue/inputswitch';
import Dialog from 'primevue/dialog';
const app = createApp(App)

app.component('SidebarNav', SidebarNav);
app.component('TopBarNav', TopBarNav);
app.use(router)
app.use(PrimeVue);
app.component('Dropdown', Dropdown);
app.component('SelectButton', SelectButton);
app.component('InputSwitch', InputSwitch);
app.component('Dialog', Dialog);
app.mount('#app')