import BaseRouter from "./Router.js"

BaseRouter.create([
    {
        name: 'home',
        path: './home',
        source: require('../static/home/home.html')
    },
    {
        name: 'index',
        path: './index',
        source: require('../common/index.html')
    },
    {
        name: 'about',
        path: './about',
        source: require('../static/about/about.html')
    },
    {
        name: 'cooperation',
        path: './cooperation',
        source: require('../static/cooperation/cooperation.html')
    },
    {
        name: 'products',
        path: './products',
        source: require('../static/products/products.html')
    },
    {
        name: 'service',
        path: './service',
        source: require('../static/service/service.html')
    },
    {
        name: 'store',
        path: './store',
        source: require('../static/store/store.html')
    },
])

import commom from '../common/index'
import about from '../static/about/about'
import cooperation from '../static/cooperation/cooperation'
import home from '../static/home/home'
import products from '../static/products/products'
import service from '../static/service/service'
import store from '../static/store/store'

export default {
    push: BaseRouter.push,
    router: BaseRouter.routers
}

