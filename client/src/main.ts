import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(vueAxios, axios);

new Vue({
  render: h => h(App),
}).$mount('#app')
