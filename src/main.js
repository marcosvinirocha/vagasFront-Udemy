import { createApp } from 'vue'
import App from './App.vue'

//importar instancia do mitt
import mitt from 'mitt';


//criar a instancia da dependencia
const emitter = mitt();

//createApp(App).mount('#app')
const app = createApp(App);

//configurar a instancia como propriedade global
app.config.globalProperties.emitter = emitter

//associar a instancia
app.mount('#app')