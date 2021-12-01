const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const values = document.querySelectorAll('.skills__item-value'),
      scales = document.querySelectorAll('.skills__item-scale span');

values.forEach( (item, i) => {
    scales[i].style.width = item.innerHTML;
});