import Vue from 'vue'
import App from './App.vue'

const USER_ID = 1;

import defineAbilitiesFor from '../resources/ability';
let ability = defineAbilitiesFor(USER_ID);
Vue.prototype.$can = ability.can.bind(ability);

new Vue({
  el: '#app',
  render: h => h(App)
});
