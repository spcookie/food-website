import $ from 'jquery'

export default class BaseRouter {

    static routers = {}

    static create(routes) {
        let obj
        for (let route of routes) {
            let content = $(route.source.default)
            let dom = content.children()
            dom.attr('id', content.attr('id'))
            obj = new Route(route.name, route.path, dom)
            if (Object.is(this.routers, {})) {
                for (const key of Object.keys(this.routers)) {
                    if (key === obj.name) {
                        throw new Error('存在相同路由名称' + obj.name)
                    }
                    Object.defineProperty(this.routers, obj.name, obj)
                }
            }
            Object.defineProperty(this.routers, obj.name, {value: obj})
        }
    }

    static push = (route) => BaseRouter.routers[route.name].dom

}

Object.defineProperty(window,'Router', {
    value: {
        push: BaseRouter.push,
        routers: BaseRouter.routers
    },
})

class Route {
    constructor(name, path, dom) {
        this.name = name
        this.path = path
        this.dom = new Dom(dom)
    }
}

class Dom {
    constructor(dom) {
        this.jqueryDom = dom
    }

    to(jqueryObj) {
        $(this.jqueryDom.clone()).appendTo(jqueryObj)
    }
}