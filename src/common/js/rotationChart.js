import $ from 'jquery'
const chart =  $('.rotation-chart > div')
const items = chart.children('div')

let i = [-1, 0, 1]
function move(flog) {
    for (let j = 0; j < 3; j++) {
        let item = items.eq(j)
        if (i[j] === (flog ? 1 : -1)) {
            item.css('left', `${flog ? -100 : 100}%`)
            i[j] = !flog ? 1 : -1
        } else if (i[j] === 0) {
            item.animate({
                left: `${!flog ? -100 : 100}%`
            }, 300)
            i[j] = i[j] + (flog ? 1 : -1)
        } else if (i[j] === (!flog ? 1 : -1)){
            item.animate({
                left: '0'
            }, 300)
            i[j] = i[j] + (flog ? 1 : -1)
        }
    }
}

$('.up').click(() => {
    move(true)
})
$('.down').click(() => {
    move(false)
})

setInterval(() => {
    move(true)
}, 5000)