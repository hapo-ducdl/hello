require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');

Vue.component('app2-component', require('./components/App2.vue').default);


const app = new Vue({
    el:"#app2",
    
})
