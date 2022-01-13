const createMenuItem = (name, price, container) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('pizzaContainer');

    const itemName = document.createElement('h2');
    itemName.innerText = name;
    itemName.classList.add('pizzaName');

    const itemPrice = document.createElement('p');
    itemPrice.innerText = price;
    itemPrice.classList.add('price');

    const itemImage = document.createElement('img');
    itemImage.src = `../src/assets/images/${name.toLowerCase()}.webp`;
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
        createMenuItem('Margherita', '30 lei', menuContainer),
        createMenuItem('Caprese', '32 lei', menuContainer),
        createMenuItem('Parmigiana', '32 lei', menuContainer),
        createMenuItem('Tonata', '33 lei', menuContainer),
        createMenuItem('Pugliese', '33 lei', menuContainer),
        createMenuItem('Siciliana', '35 lei', menuContainer),
        createMenuItem('Affumicata', '36 lei', menuContainer),
        createMenuItem('Romagnola', '36 lei', menuContainer),
        createMenuItem('Caserta', '38 lei', menuContainer),
        createMenuItem('Vegana', '38 lei', menuContainer),
        createMenuItem('Marinara', '40 lei', menuContainer),
        createMenuItem('Cosacca', '40 lei', menuContainer),
        createMenuItem('Capricciosa', '41 lei', menuContainer)
    ];
}

export {
    createMenu
};