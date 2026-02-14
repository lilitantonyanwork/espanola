
document.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector('header .menu');
    const menu_btn = document.querySelector('.btn__menu');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('active');
        document.querySelector('header').classList.toggle('active');
        document.querySelector('body').classList.toggle('no-scroll');
    })

    var swiper = new Swiper(".news__list", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    var swiper1 = new Swiper(".tradition__list", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

});
