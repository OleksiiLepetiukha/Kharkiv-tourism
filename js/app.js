function burger() {
    const navbar = document.querySelector(".navigation");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}

function drop() {

    const info = document.querySelector('.restaurant-info');
    console.log('clikced');
    if (info.style.display === 'flex') {
        info.style.display = 'none';
    } else {
        info.style.display = 'flex';
    }
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