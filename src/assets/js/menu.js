import affumicata from '../images/affumicata.webp'
import caprese from '../images/caprese.webp';
import capricciosa from '../images/capricciosa.webp';
import caserta from '../images/caserta.webp';
import cosacca from '../images/cosacca.webp';
import margherita from '../images/margherita.webp';
import parmigiana from '../images/parmigiana.webp';
import pugliese from '../images/pugliese.webp';
import romagnola from '../images/romagnola.webp';
import siciliana from '../images/siciliana.webp';
import tonata from '../images/tonata.webp';
import vegana from '../images/vegana.webp';
import marinara from '../images/marinara.webp';


const createMenuItem = (name, price, container, source) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('pizzaContainer');

    const itemName = document.createElement('h2');
    itemName.innerText = name;
    itemName.classList.add('pizzaName');

    const itemPrice = document.createElement('p');
    itemPrice.innerText = price;
    itemPrice.classList.add('price');

    const itemImage = document.createElement('img');
    itemImage.src = source;
    itemImage.alt = `image of ${name}`;
    itemImage.classList.add('pizzaImage');

    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);
    container.appendChild(itemContainer);
};

const createMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');


    content.appendChild(menuContainer);

    const menuItemsArray = [
        createMenuItem('Margherita', '30 lei', menuContainer, margherita),
        createMenuItem('Caprese', '32 lei', menuContainer, caprese),
        createMenuItem('Parmigiana', '32 lei', menuContainer, parmigiana),
        createMenuItem('Tonata', '33 lei', menuContainer, tonata),
        createMenuItem('Pugliese', '33 lei', menuContainer, pugliese),
        createMenuItem('Siciliana', '35 lei', menuContainer, siciliana),
        createMenuItem('Affumicata', '36 lei', menuContainer, affumicata),
        createMenuItem('Romagnola', '36 lei', menuContainer, romagnola),
        createMenuItem('Caserta', '38 lei', menuContainer, caserta),
        createMenuItem('Vegana', '38 lei', menuContainer, vegana),
        createMenuItem('Marinara', '40 lei', menuContainer, marinara),
        createMenuItem('Cosacca', '40 lei', menuContainer, cosacca),
        createMenuItem('Capricciosa', '41 lei', menuContainer, capricciosa)
    ];
}

export {
    createMenu
};