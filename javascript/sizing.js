// JavaScript code for menu toggle functionality
function toggleMenu() {
    const menuBar = document.querySelector('.menu-bar');

    menuBar.classList.toggle('active');
}

// Call the toggleMenu function when the menu toggle button is clicked
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);
