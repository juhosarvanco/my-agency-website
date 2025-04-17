// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Fix the navigation anchoring for Work With Me, About, and Blog sections
    
    // Get all navigation links that have hash (#) in their href
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            
            // Skip if the href is just "#" (home link)
            if (targetId === '#') return;
            
            // Get the target element
            const targetElement = document.querySelector(targetId);
            
            // If target element exists, scroll to it
            if (targetElement) {
                // Get the header height to account for fixed positioning
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Calculate the target position with offset for the fixed header
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle mobile menu button (for responsive design)
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('nav ul');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
