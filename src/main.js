import Vue from 'vue'
import App from './App.vue'
import abilityPlugin from './ability-plugin';
const defineAbilitiesFor = require('../resources/ability');

let { posts, users } = JSON.parse(window.data);
let activeUser = users.find(user => user.active);
let ability = defineAbilitiesFor(activeUser.id);
Vue.use(abilityPlugin, ability);

new Vue({
  el: '#app',
  render: h => h(App)
});
