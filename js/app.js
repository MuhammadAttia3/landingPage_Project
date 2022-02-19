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


// // building the navigation bar.
const navBar = () => {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const aList = document.createElement('li');
        aList.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        fragment.appendChild(aList);
    };
    navbarList.appendChild(fragment);
}



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

//Calling 
navBar();