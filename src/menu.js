// alethi spice


// shin chicken



// reshi isles fish



// listener (narak)


// wine list
export default function createMenu() {

    const content = document.getElementById('content');
    content.innerHTML = "";
    const menu = document.createElement('div');

    menu.classList.add('welcome');
    menu.textContent = 'Menu';

    content.appendChild(menu);
    
};