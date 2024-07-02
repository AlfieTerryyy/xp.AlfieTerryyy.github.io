// script.js

// Get references to DOM elements
const desktopIcons = document.querySelector('.desktopIcons');
const startMenu = document.querySelector('.startmenu');

// Example: Add event listeners for icon clicks
desktopIcons.addEventListener('click', (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.tagName === 'IMG') {
        // Handle icon click (e.g., open associated app)
        console.log(`Clicked icon: ${clickedIcon.alt}`);
    }
});

// Example: Show/hide start menu
startMenu.addEventListener('click', () => {
    // Toggle visibility of start menu
    startMenu.classList.toggle('active');
});

// Add more functionality as needed
// For instance, implement search functionality, widget behavior, etc.
