import Vue from 'vue';

// app's components
import App from '../vue/app.vue';
Vue.component('app', App);

// init
document.addEventListener('DOMContentLoaded', (_evt) => {
  const app = new Vue({
    el: '[data-behavior="vue"]'
  });
});
