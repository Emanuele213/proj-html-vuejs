import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'; // libreria icone del progetto
import { faAngleDown, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'; // importiamo le icone che ci servono
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // importazione del componente FontAwesomeIcon
import App from './App.vue';

library.add(faAngleDown, faArrowRight, faPhone); // aggiungiamo le icone nella libreria del progetto
Vue.component('FontAwesomeIcon', FontAwesomeIcon); // registrazione globale del componente FontAwesomeIcon per renderlo usabile in qualsiasi parte del codice senza ulteriore importazione

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
