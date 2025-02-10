// alethi spice


// shin chicken



// reshi isles fish



// listener (narak)


// wine list


const createMenu = (function () {

    const content = document.getElementById('content');
    const menu = document.createElement('div');

    content.innerHTML = "";

    menu.classList.add('welcome');
    menu.textContent = 'Menu';

    content.appendChild(menu);
    
    
})();

export default createMenu;