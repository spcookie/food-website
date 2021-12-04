import $ from "jquery"

const navs = $('.nav > ul > li').not('li#logo').not('li:last')
console.log(navs)
const subNav = $('.sub-nav > li:first')
console.log(subNav)

//tabs跳转
for (let i = 0; i < navs.length; i++) {
    let nav = navs.eq(i)
    let name = nav.attr('data-router')
    nav.click(() => {
        let view = $('#router-view')
        if (!view.is('#router-view > div')) {
            view.empty()
        }
        window.Router.push({
            name
        }).to(view)
    })
}

let name = subNav.attr('data-router')
subNav.click(() => {
    let view = $('#router-view')
    if (!view.is('#router-view > div')) {
        view.empty()
    }
    window.Router.push({
        name
    }).to(view)
})

//tabs选中时添加class
navs.click(function () {
    navs.end().removeClass('nav-click')
    navs.end().children('div').addClass('luminescence')
    $(this).addClass((index, clazz) => {
        return clazz + ' nav-click'
    })
    $(this).children('div').removeClass('luminescence')
})
subNav.click(function () {
    navs.end().removeClass('nav-click')
    navs.end().children('div').addClass('luminescence')
    navs.end().last().addClass((index, clazz) => {
        return clazz + ' nav-click'
    })
    navs.end().last().children('div').removeClass('luminescence')
})