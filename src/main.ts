import Vue from 'vue';
import App from './App.vue';
import store from './data/Store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
