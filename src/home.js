// picture of roshar in background
// 
// title top left, nav buttons to the right


const createHome = (function () {

    const content = document.getElementById('content');
    const welcome = document.createElement('div');

    content.innerHTML = "";

    welcome.classList.add('welcome');
    welcome.textContent = 'Welcome to Roshar Restaurant';

    content.appendChild(welcome);
    
    
})();

export default createHome;