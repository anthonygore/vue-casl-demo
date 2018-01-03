import Vue from 'vue'
import App from './App.vue'

const defineAbilitiesFor = require('../resources/ability');
let data = JSON.parse(window.data);
let activeUser = data.users.find(user => user.active);
let ability = defineAbilitiesFor(activeUser.id);
Vue.prototype.$can = ability.can.bind(ability);

new Vue({
  el: '#app',
  render: h => h(App)
});
