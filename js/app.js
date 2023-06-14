// function for burger menu in header

function burger() {
    const navbar = document.querySelector(".navigation");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}

// function for dropdown menu on dining page

function drop(event) {
    const par = event.target.parentNode;
    const info = par.querySelector('.restaurant-info');
    info.classList.toggle('js-toggle-visibility');
    const btn = par.querySelector('.restaurant-button')
    btn.innerHTML = (info.classList.length > 1) ? 'Less...' : 'More..';
}

// function for slider on attractions page

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

// form validation function for contact form on contacts page

const form = document.querySelector('.callback-form');
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#email + .field-error');
const phoneError = document.querySelector('#phone + .field-error');


function validateName() {
    if (nameInput.validity.valid) {
        nameError.textContent = '';
    } else {
        showNameError();
    }
}

function showNameError() {
    nameError.textContent = 'Please enter your name';
}

function validateEmail() {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
    } else {
        showEmailError();
    }
}

function showEmailError() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = 'Please enter your email address';
    } else if(emailInput.validity.typeMismatch) {
        emailError.textContent = 'Your email address does not appear to be correct';
    }
}

function validatePhone() {
    if (phoneInput.validity.valid) {
        nameError.textContent = '';
    } else {
        showPhoneError();
    }
}

function showPhoneError() {
    phoneError.textContent = 'Please enter your phone number';
}

function validateForm(event) {
    let formHasErrors = false;
    if (!nameInput.validity.valid) {
        formHasErrors = true;
        showNameError();
    }

    if(!emailInput.validity.valid){
        formHasErrors = true;
        showEmailError();
    }

    if(!phoneInput.validity.valid){
        formHasErrors = true;
        showPhoneError();
    }

    if(formHasErrors){
        event.preventDefault();
    }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);

form.addEventListener('submit', validateForm);
