
import './css/styles.css';

import './js-code/theme';

import menu from './data/menu.json';
import menuItem from './templateMarkUp/menuItem.hbs';




const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('afterbegin', createMenu(menu));

function createMenu(menu) {
    return menuItem(menu);
};