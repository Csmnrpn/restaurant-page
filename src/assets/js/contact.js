const createContactPage = () => {
    const content = document.querySelector('#content');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    content.appendChild(contactContainer);

    const contactInformation = document.createElement('div');
    contactInformation.classList.add('contactInformation');
    contactContainer.appendChild(contactInformation);

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1411642048297!2d26.05119421593714!3d44.430266479102315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201d0fd363b45%3A0x34217baf67a8ce99!2sBulevardul%20General%20Vasile%20Milea%204%2C%20Bucure%C8%99ti%20061344!5e0!3m2!1sen!2sro!4v1639422360540!5m2!1sen!2sro';
    map.loading = 'lazy';
    map.allowFullscreen = '';
    map.classList.add('map');
    contactContainer.appendChild(map);

    const contactArray = [
        createContactInformation('ADDRESS', 'Bulevardul General Vasile Milea 4, București 061344', contactInformation),
        createContactInformation('DELIVERY', '0752 XXX 000', contactInformation),
        createContactInformation('RESERVATIONS', '0726 000 XXX', contactInformation),
        createContactInformation('EMAIL', 'thisemail@isnotreal.ro', contactInformation)
    ];
}

function createContactInformation(title, description, contactInformation) {
    const _container = document.createElement('div');
    _container.classList.add('_container');
    contactInformation.appendChild(_container);

    const _title = document.createElement('h2');
    _title.textContent = title;
    _title.classList.add('title');
    _container.appendChild(_title);

    const _description = document.createElement('p');
    _description.textContent = description;
    _description.classList.add('description');
    _container.appendChild(_description);
}

export {
    createContactPage
};