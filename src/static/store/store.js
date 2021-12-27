import $ from "jquery"

export default function () {
    const $mask = $('#store .mask')
    const $back = $('#store .detail-back')
    const $innerImage = $('.inner-image > img')

    $innerImage.click(() => {
        $mask.show()
    })

    $back.click(() => {
        $mask.hide()
    })

    const $pre = $('.detail-pre')
    const $next = $('.detail-next')
    const $detail = $('#store .img-detail')

    let i = 1
    $pre.click(() => {
        if (i > 0) {
            i--
            $detail.find('img').prop('src', require(`../../assets/img/store/0.png`))
        } else {
            i++
            $detail.find('img').prop('src', require(`../../assets/img/store/1.png`))
        }
    })
    $next.click(() => {
        if (i > 0) {
            i--
            $detail.find('img').prop('src', require(`../../assets/img/store/0.png`))
        } else {
            i++
            $detail.find('img').prop('src', require(`../../assets/img/store/1.png`))
        }
    })
}
