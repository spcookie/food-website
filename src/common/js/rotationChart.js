import $ from 'jquery'
const chart =  $('.rotation-chart > div')
const items = chart.children('div')

let i = [-1, 0, 1]
function move(flog) {
    for (let j = 0; j < 3; j++) {
        let item = items.eq(j)
        if (i[j] === (flog ? 1 : -1)) {
            item.queue(function () {
                $(this).css('left', `${flog ? -100 : 100}%`)
                $(this).dequeue()
            })
            i[j] = !flog ? 1 : -1
        } else if (i[j] === 0) {
            item.animate({
                left: `${!flog ? -100 : 100}%`
            }, 200)
            i[j] = i[j] + (flog ? 1 : -1)
        } else if (i[j] === (!flog ? 1 : -1)){
            item.animate({
                left: '0'
            }, 200)
            i[j] = i[j] + (flog ? 1 : -1)
        }
    }
}

let autoMove = () => {
    return setInterval(() => {
        move(true)
    }, 5000)
}

let aMove = autoMove()

$('.up').click(() => {
    move(true)
    clearInterval(aMove)
    aMove = autoMove()
})
$('.down').click(() => {
    move(false)
    clearInterval(aMove)
    aMove = autoMove()
})
