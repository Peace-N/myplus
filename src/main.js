import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuex from 'vuex'
import { store } from './store'

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store,
}).$mount('#app')
