/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Global Variables
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// // building the navigation bar.
let fragment = Document.createDocumentFragment();
let navBar = () => {
    for (const section of sections) {
        const aList = Document.createElement('li');
        const aListLink = Document.createElement('a');
        aListLink.textContent = section.dataset.nav;
        aListLink.classList.add('menu__link');
        aList.appendChild(aListLink);
        fragment.appendChild(aList);
    };
    navbar__list.appendChild(fragment);
}

// const fragment = document.createDocumentFragment();
// function navBar() {
//     sections.forEach(section => {
//         const aList = document.createElement('li');
//         aList.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
//         navbarList.appendChild(aList);
//     });
//     // navbarList.appendChild(fragment);
// }
navBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


