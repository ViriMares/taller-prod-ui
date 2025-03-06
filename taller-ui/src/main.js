import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components'; // Importar todos los componentes
import * as directives from 'vuetify/directives'; // Importar directivas (para efectos como ripples)

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(vuetify); // Asegurar que Vuetify está registrado

app.mount('#app');
