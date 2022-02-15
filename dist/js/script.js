const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const number = document.querySelectorAll('.skills__scale-number'),
    lines = document.querySelectorAll('.skills__scale-scale span');

number.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});