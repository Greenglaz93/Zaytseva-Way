const menu = document.querySelector('.main-nav');
const toggle = menu.querySelector('.main-nav__toggle');

export const makeInteractiveMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    menu.classList.remove('main-nav--nojs');
    menu.classList.add('main-nav--closed');
  });

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('main-nav--closed')) {
      menu.classList.remove('main-nav--closed');
      menu.classList.add('main-nav--opened');
    } else {
      menu.classList.add('main-nav--closed');
      menu.classList.remove('main-nav--opened');
    }
  });
};
