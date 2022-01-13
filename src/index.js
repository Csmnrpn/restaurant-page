import frontFunction from './assets/js/front';
import {
    createMenu
} from './assets/js/menu';
import {
    createContactPage
} from './assets/js/contact';
import './assets/css/style.css';

frontFunction();
const body = document.querySelector('body');

const navbar = document.createElement('div');
navbar.classList.add('navbar');
body.appendChild(navbar);

const navigation = document.createElement('ul');
navigation.classList.add('navigation');
navbar.appendChild(navigation);

const navigationItems = ['home', 'menu', 'contact'];
const navigationFunctions = [frontFunction, createMenu, createContactPage];

const homeItem = document.createElement('li');
const homeText = document.createElement('h2');
homeText.innerText = navigationItems[0].toUpperCase();
homeItem.appendChild(homeText);
navigation.appendChild(homeItem);
homeItem.addEventListener('click', frontFunction);

const menuItem = document.createElement('li');
const menuText = document.createElement('h2');
menuText.innerText = navigationItems[1].toUpperCase();
menuItem.appendChild(menuText);
navigation.appendChild(menuItem);
menuItem.addEventListener('click', createMenu);

const contactItem = document.createElement('li');
const contactText = document.createElement('h2');
contactText.innerText = navigationItems[2].toUpperCase();
contactItem.appendChild(contactText);
navigation.appendChild(contactItem);
contactItem.addEventListener('click', createContactPage);
// createMenu();
// createContactPage();