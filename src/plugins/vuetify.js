import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VuePlyr from 'vue-plyr'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.


Vue.use(Vuetify);
Vue.use(VuePlyr);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
