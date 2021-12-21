const menu = document.querySelector('.main-nav');
const toggle = menu.querySelector('.main-nav__toggle');

const closeMenu = () => {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
  menu.classList.add('main-nav--closed');
  menu.classList.remove('main-nav--opened');
};

const openMenu = () => {
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Закрыть меню');
  menu.classList.remove('main-nav--closed');
  menu.classList.add('main-nav--opened');
};

const switchMenu = () => {
  if (menu.classList.contains('main-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const onToggleClick = () => switchMenu();

export const makeInteractiveMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    menu.classList.remove('main-nav--nojs');
    menu.classList.add('main-nav--closed');

    toggle.addEventListener('click', () => onToggleClick);
  });
};
