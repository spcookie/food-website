import $ from 'jquery'
import Router from './router/index.js'

Router.push({
    name: 'index'
}).to($('#app'))

Router.push({
    name: 'home'
}).to($('#router-view'))


