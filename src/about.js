// cultivation

// honor

// odium
export default function createAbout() {

    const content = document.getElementById('content');
    content.innerHTML = "";
    const about = document.createElement('div');

    about.classList.add('welcome');
    about.textContent = 'About the Roshar Restaurant';

    content.appendChild(about);
    
};