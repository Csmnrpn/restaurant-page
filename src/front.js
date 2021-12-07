const content = document.querySelector('#content');


const frontFunction = function () {
    const mainContent = document.createElement('div');
    const heading = document.createElement('h1');
    const openHours = document.createElement('p');

    heading.textContent = 'Placeholder Pizza';
    openHours.textContent = `Monday - Friday: 09:00 - 23:00 Saturday: 09:00 - 16:00 Sunday: Closed`;
    heading.classList.add('red');

    content.appendChild(mainContent);
    mainContent.appendChild(heading);
    mainContent.appendChild(openHours);
}

export default frontFunction;