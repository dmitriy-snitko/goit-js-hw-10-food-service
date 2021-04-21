import menuItems from "./menuItems.handlebars";
import menu from "./menu.json";

import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  checkBox: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};

CurrentThemeCheck();

refs.menu.insertAdjacentHTML('beforeend', menuItems(menu));
refs.checkBox.addEventListener('change', bodyThemeSwitch);

function CurrentThemeCheck() {
  if (localStorage.isCheckboxChecked !== 'true') {
    return refs.body.classList.add(Theme.LIGHT);
  };

  refs.checkBox.checked = JSON.parse(localStorage.isCheckboxChecked);
  refs.body.classList.add(Theme.DARK);
};

function bodyThemeSwitch() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  localStorage.isCheckboxChecked = refs.checkBox.checked;
};