
document.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector('header .menu');
    const menu_btn = document.querySelector('.btn__menu');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('active');
        document.querySelector('header').classList.toggle('active');
        document.querySelector('body').classList.toggle('no-scroll');
    })


});
