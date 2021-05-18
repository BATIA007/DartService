'use strict';

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.services__item')) return;
    let div = event.target.closest('.services__item');
    let target = div.querySelector('.services__link');
    target.hidden = !target.hidden;
});

menu.onclick = function() {
    menuClose();
}

document.addEventListener('click', function(event) {
    if (event.target.tagName = headerOverlay) return;
    menu.classList.remove('header__nav-btn-active');
    headerOverlay.classList.remove('header__active-for-menu');
    headerLogin.classList.remove('header__active-for-menu');
    headerList.classList.remove('header__active-for-menu');
});

for (let link of headerList.children) {
    link.onclick = menuClose
}


headerLogin.addEventListener('click', function() {
    menuClose();
});

function menuClose() {
    menu.classList.toggle('header__nav-btn-active');
    headerOverlay.classList.toggle('header__active-for-menu');
    headerLogin.classList.toggle('header__active-for-menu');
    headerList.classList.toggle('header__active-for-menu');
}

let comment = document.querySelector('.testimonials__comment')
let carouselItemHeight = comment.offsetHeight + 70;
carousel.style.height = (carouselItemHeight) * carousel.children.length;
slider.style.height = comment.offsetHeight * 2 + 70 + 'px';

let position = 0;
let count = 2;

arrowDown.onclick = function() {
    position -= carouselItemHeight;
    position = Math.max(position, -carouselItemHeight * (carousel.children.length - count));
    carousel.style.marginTop = position + 'px';
}

arrowUp.onclick = function() {
    position += carouselItemHeight;
    position = Math.min(position, 0);
    carousel.style.marginTop = position + 'px';
}


let sliderTeam = document.querySelector('.team__images')


sliderTeam.onclick = function(event) {
    if (event.target.tagName != 'IMG') return;
    let targ = event.target;
    let sliders = sliderTeam.children;
    let items = document.querySelectorAll('.team__item')
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('team__image-active')) {
            sliders[i].classList.remove('team__image-active');
            items[i].classList.remove('team__item-active');
        }
    }
    targ.classList.add('team__image-active');
    for (let i = 0; i < items.length; i++) {
        if (sliders[i].classList.contains('team__image-active')) {
            items[i].classList.add('team__item-active');
        }
    }
}

submit.onclick = function(event) {
    for (let input of document.forms.form.querySelectorAll('input')) {
        if (input.getAttribute('type') == 'checkbox') continue;
        if (input.value == '') return;
    }
    event.preventDefault();
    alert("Регистрация завершена!")
    checkbox.checked = false;
    form.textarea.value = '';
    for (let input of form.querySelectorAll('input')) {
        if (input.getAttribute('type') == 'submit') continue;
        input.value = '';
    }
}

let clicker = document.querySelector('.click-button');
const overlay = document.querySelector('.modal__overlay');


clicker.onclick = function() {
    modalShow();
};

modalSubmit.onclick = function(event) {
    modalCloseSubmit(event);
    }

overlay.onclick = function(event) {
    if (event.target != overlay) return;
    modalClose();
};

document.addEventListener('keydown', function(event) {
    if (event.code != 'Escape' && !modalFrom.classList.contains('modal__form-active')) return;
    modalClose();
});

function modalShow() {
    modal.style.display = "block";
    document.documentElement.style.overflow = "hidden";
    setTimeout(() => modalForm.classList.add('modal__form-active'), 0)
}

function modalCloseSubmit(event) {
    for (let input of document.forms.modalForms.querySelectorAll('input')) {
        if (input.getAttribute('type') == 'checkbox') continue;
        if (input.value == '') return;
    }

    event.preventDefault();
    alert("Регистрация завершена!")
    modalCheckbox.checked = false;
    modalForm.textarea.value = '';
    for (let input of modalForm.querySelectorAll('input')) {
        if (input.getAttribute('type') == 'submit') continue;
        input.value = '';
    }
    modalForm.classList.remove('modal__form-active');
    document.documentElement.style.overflow = "";
    setTimeout(() => modal.style.display = 'none', 1000);
}

function modalClose() {
    modalForm.classList.remove('modal__form-active');
    document.documentElement.style.overflow = "";
    setTimeout(() => modal.style.display = 'none', 1000);
}