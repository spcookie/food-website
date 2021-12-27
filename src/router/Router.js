import $ from 'jquery'

export default class BaseRouter {

    static routers = {}

    static create(routes) {
        let obj
        for (let route of routes) {
            let {default:html} = route.source.html()
            let js = route.source.js
            route.source.css()
            let content = $(html)
            let $dom = content.children()
            $dom.attr('id', content.attr('id'))
            obj = new Route(route.name, route.path, $dom, js)
            for (const key of Object.keys(this.routers)) {
                if (key === obj.name) {
                    throw new Error('存在相同名称' + obj.name)
                }
            }
            Object.defineProperty(this.routers, obj.name, {value: obj})
        }
    }

    static push =  (route) => {
        return BaseRouter.routers[route.name].dom
    }
}

Object.defineProperty(window,'Router', {
    value: {
        push: BaseRouter.push,
        routers: BaseRouter.routers
    },
})

class Route {
    constructor(name, path, dom, js) {
        this.name = name
        this.path = path
        this.dom = new Dom(dom, js)
    }
}

class Dom {
    constructor(dom, js) {
        this.jqueryDom = dom
        this.implement = js
    }

     to(jqueryObj) {
        $(this.jqueryDom.clone()).appendTo(jqueryObj)
        this.implement().then((val) => {
            const o = val.default
            if (o instanceof Function) {
                o()
            }
        })
    }
}