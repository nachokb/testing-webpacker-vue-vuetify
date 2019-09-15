const { environment } = require('@rails/webpacker')

const { VueLoaderPlugin } = require('vue-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const vue = require('./loaders/vue')

environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

environment.config.resolve.alias = { 'vue$': 'vue/dist/vue.esm.js' }

module.exports = environment
