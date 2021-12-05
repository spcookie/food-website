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

import('../common/index')
import('../static/about/about')
import('../static/cooperation/cooperation')
import('../static/home/home')
import('../static/products/products')
import('../static/service/service')
import('../static/store/store')

export default {
    push: BaseRouter.push,
    router: BaseRouter.routers
}

