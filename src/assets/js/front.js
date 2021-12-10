const frontFunction = function () {
    const content = document.querySelector('#content');
    const mainContent = document.createElement('div');
    const heading = document.createElement('h1');
    const openHours = document.createElement('p');

    content.appendChild(mainContent);
    mainContent.appendChild(heading);
    mainContent.appendChild(openHours);

    mainContent.classList.add('frontPageContent');
    heading.classList.add('restaurantName');
    openHours.classList.add('openHours');

    heading.innerHTML = "Los Pizzas";
    openHours.innerHTML = `Monday - Friday: 09:00 - 23:00<br><br>Saturday: 09:00 - 16:00<br><br>Sunday: Closed`;

}

export default frontFunction;