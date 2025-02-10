// picture of roshar in background
// 
// title top left, nav buttons to the right

export default function createHome() {

    const content = document.getElementById('content');
    content.innerHTML = "";
    const welcome = document.createElement('div');

    welcome.classList.add('welcome');
    welcome.textContent = 'Welcome to Roshar Restaurant';

    content.appendChild(welcome);
    
};