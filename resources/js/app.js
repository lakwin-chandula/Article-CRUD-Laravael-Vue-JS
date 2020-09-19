
import Vue from 'vue';
require('./bootstrap');

window.Vue = require('vue');

// Vue.component('articles', require('./components/Articles.vue'));         // this is older method laravel mix v 2

// const app = new Vue({
//     el: '#app',
//     components:{articles}
// });
import Navbar from './components/Navbar.vue'
// Vue.component('navbar-component', Navbar);

import Articles from './components/Articles.vue'
// Vue.component('articles-component', Articles);

// Vue.component("ExampleComponent", () => import("./components/ExampleComponent"));

const app = new Vue({
    el: '#app',

    components:{
        Navbar,
        Articles

    }
});