import Vue from 'vue';
import vuetify from './vuetify';

// app's components
import App from '../vue/app.vue';
Vue.component('app', App);

// init
document.addEventListener('DOMContentLoaded', (_evt) => {
  const app = new Vue({
    vuetify,
    el: '[data-behavior="vue"]'
  });
});
