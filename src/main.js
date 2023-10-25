import { createApp } from 'vue';
import './app/scss/index.scss';
import vueToPrint from 'vue-to-print';
import App from './App.vue';

const app = createApp(App);

app.use(vueToPrint);
app.mount('#app');
