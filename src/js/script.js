const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

function closeMenu() {
    menu.classList.remove('active');
}

closeElem.addEventListener('click', () => {
    closeMenu();
});

overlay.addEventListener('click', () => {
    closeMenu();
});


const values = document.querySelectorAll('.skills__item-value'),
      scales = document.querySelectorAll('.skills__item-scale span');

values.forEach( (item, i) => {
    scales[i].style.width = item.innerHTML;
});