// npx webpack serve

// import the tabs from other modules
import "./styles.css";
import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";

// event listener on nav buttons
// clears content div
// populates the button div content

const buttons = document.querySelectorAll('.nav-buttons');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.id);
        
        switch (event.target.id) {
            case 'home':
                createHome();
                break;
            case 'menu':
                createMenu();
                break;
            case 'about':
                createAbout();
                break;
            default:
                break;
        }
    });
});