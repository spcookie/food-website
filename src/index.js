import $ from 'jquery'
import R from './router/index.js'

R.push({
    name: 'index'
}).to($('#app'))

R.push({
    name: 'home'
}).to($('#router-view'))


