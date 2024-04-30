var s = new Swiper('.sw', {
    loop: true,
    loopedSlides: 3,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 5,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
})


var btn = document.querySelector('.song-btn-no')
var e = 0
btn.addEventListener('click', () => {
    e++
    console.log(e);
})

// const cir2 = document.querySelector('.cir2')
// window.addEventListener('scroll', () => {
//     var pag_y = window.pageYOffset
//     console.log(pag_y);
//     if (pag_y > 4500) {
//         cir2.style.width = '120vw'
//         cir2.style.height = '120vw'
//     } else {
//         console.log(2);
//     }
// })