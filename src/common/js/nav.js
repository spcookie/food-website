import $ from "jquery"

const navs = $('.nav li').not('li#logo')

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

//tabs选中时添加class
navs.click(function () {
    navs.removeClass('nav-click')
    $(this).addClass((index, clazz) => {
        return clazz + ' nav-click'
    })
})