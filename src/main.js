import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.use(VueTheMask);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
