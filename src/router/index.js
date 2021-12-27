import BaseRouter from "./Router.js"

BaseRouter.create([
    {
        name: 'home',
        path: './home',
        source: {
            html: () => require('../static/home/home.html'),
            css: () => import('../static/home/home.scss'),
            js: () => import('../static/home/home.js')
        }
    },
    {
        name: 'index',
        path: './index',
        source: {
            html: () => require('../common/index.html'),
            css: () => import('../common/index.scss'),
            js: () => import('../common/index.js')
        }
    },
    {
        name: 'about',
        path: './about',
        source: {
            html: () => require('../static/about/about.html'),
            css: () => import('../static/about/about.scss'),
            js: () => import('../static/about/about.js')
        }
    },
    {
        name: 'cooperation',
        path: './cooperation',
        source: {
            html: () => require('../static/cooperation/cooperation.html'),
            css: () => import('../static/cooperation/cooperation.scss'),
            js: () => import('../static/cooperation/cooperation.js')
        }
    },
    {
        name: 'products',
        path: './products',
        source: {
            html: () => require('../static/products/products.html'),
            css: () => import('../static/products/products.scss'),
            js: () => import('../static/products/products.js')
        }
    },
    {
        name: 'service',
        path: './service',
        source: {
            html: () => require('../static/service/service.html'),
            css: () => import('../static/service/service.scss'),
            js: () => import('../static/service/service.js')
        }
    },
    {
        name: 'store',
        path: './store',
        source: {
            html: () => require('../static/store/store.html'),
            css: () => import('../static/store/store.scss'),
            js: () => import('../static/store/store.js')
        }
    },
])

export default {
    push: BaseRouter.push,
    router: BaseRouter.routers
}

