// cultivation

// honor

// odium

const createAbout = (function () {

    const content = document.getElementById('content');
    const about = document.createElement('div');

    content.innerHTML = "";

    about.classList.add('welcome');
    about.textContent = 'About the Roshar Restaurant';

    content.appendChild(about);
    
    
})();

export default createAbout;