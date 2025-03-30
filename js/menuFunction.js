const menuBtn = document.querySelector('.menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Function to toggle menu
function toggleMenu() {
    dropdownMenu.classList.toggle('open-menu');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    // Check if click is outside menu and menu button
    const isClickInsideMenu = dropdownMenu.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);
    
    // If menu is open and click is outside menu and not on menu button
    if (dropdownMenu.classList.contains('open-menu') && !isClickInsideMenu && !isClickOnMenuBtn) {
        dropdownMenu.classList.remove('open-menu');
    }
});

// Prevent clicks on the menu itself from closing it
dropdownMenu.addEventListener('click', function(event) {
    event.stopPropagation();
});