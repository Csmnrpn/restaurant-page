import frontFunction from './assets/js/front';
import {
    createMenu
} from './assets/js/menu';
import {
    createContactPage
} from './assets/js/contact';
import './assets/css/style.css';


const body = document.querySelector('body');

const navbar = document.createElement('div');
navbar.classList.add('navbar');
body.appendChild(navbar);

const navigation = document.createElement('ul');
navigation.classList.add('navigation');
navbar.appendChild(navigation);

const navigationItems = ['home', 'menu', 'contact'];

navigationItems.forEach(item => {
    const navItem = document.createElement('li');
    const navText = document.createElement('h2');
    navText.innerText = item.toUpperCase();
    navItem.appendChild(navText);
    navigation.appendChild(navItem);

    navItem.addEventListener('click', (item) => {

    })
})



frontFunction();
// createMenu();
// createContactPage();