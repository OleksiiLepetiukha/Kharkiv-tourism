function burger() {
    const navbar = document.querySelector(".navigation");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}

function drop(event) {
    const par = event.target.parentNode;
    const info = par.querySelector('.restaurant-info');
    info.classList.toggle('js-toggle-visibility');
    const btn = par.querySelector('.restaurant-button')
    btn.innerHTML = (info.classList.length > 1) ? 'Less...' : 'More..';
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});