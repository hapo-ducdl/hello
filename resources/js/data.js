require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');

Vue.component('app-component', require('./components/App.vue').default);

const app = new Vue({
    el:"#newApp",
})

