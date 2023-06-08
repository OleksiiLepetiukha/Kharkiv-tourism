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