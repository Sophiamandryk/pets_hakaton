// main.js - Complete navigation handler for Ukrainian animal shelter website

document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    console.log('Current page:', currentPage);
    
    // Handle navigation based on current page
    switch(currentPage) {
        case 'index.html':
        case '': // Handle root URL
            // Handle "Увійти" button
            const loginBtn = document.querySelector('.btn-primary');
            if (loginBtn) {
                loginBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'log_in.html';
                });
            }
            
            // Handle "Зареєструватися" button
            const registerBtn = document.querySelector('.btn-secondary');
            if (registerBtn) {
                registerBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'sign_up1.html';
                });
            }
            
            // Additional more aggressive approach
            document.querySelectorAll('a, button, .btn').forEach(element => {
                if (element.textContent.trim() === 'Увійти') {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'log_in.html';
                    });
                }
                if (element.textContent.trim() === 'Зареєструватися') {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'sign_up1.html';
                    });
                }
            });
            break;
            
        case 'sign_up1.html':
            // Original implementation
            const shelterButtons = document.querySelectorAll('button, .user-type-btn');
            shelterButtons.forEach(button => {
                if (button.textContent && button.textContent.trim().toLowerCase() === 'притулок') {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('Притулок button clicked, navigating to sign_up2.html');
                        window.location.href = 'sign_up2.html';
                    });
                }
            });
            
            const volunteerButtons = document.querySelectorAll('button, .user-type-btn');
            volunteerButtons.forEach(button => {
                if (button.textContent && button.textContent.trim().toLowerCase() === 'волонтер') {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('Волонтер button clicked, navigating to sign_up11.html');
                        window.location.href = 'sign_up11.html';
                    });
                }
            });
            
            // More aggressive approach from improved implementation
            const shelterElements = document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"], [onclick]');
            shelterElements.forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('притулок')) {
                    console.log('Found притулок element:', element);
                    
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('притулок clicked, navigating to sign_up2.html');
                        window.location.href = 'sign_up2.html';
                    });
                }
            });
            
            // Handle "Волонтер" button aggressively
            const volunteerElements = document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"], [onclick]');
            volunteerElements.forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('волонтер')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('Волонтер clicked, navigating to sign_up11.html');
                        window.location.href = 'sign_up11.html';
                    });
                }
            });
            
            // Global click handler as fallback
            document.addEventListener('click', function(e) {
                const clickedElement = e.target;
                if (clickedElement.textContent) {
                    const text = clickedElement.textContent.toLowerCase();
                    if (text.includes('притулок')) {
                        e.preventDefault();
                        console.log('Global click handler caught притулок click');
                        window.location.href = 'sign_up2.html';
                    } else if (text.includes('волонтер')) {
                        e.preventDefault();
                        console.log('Global click handler caught волонтер click');
                        window.location.href = 'sign_up11.html';
                    }
                }
            });
            break;
            
        case 'sign_up2.html':
            // Original implementation
            const registerBtns = document.querySelectorAll('button, .btn-submit');
            registerBtns.forEach(button => {
                if (button.textContent && button.textContent.toLowerCase().includes('зареєструватися')) {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'after_logging.html';
                    });
                }
            });
            
            // More aggressive approach
            document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('зареєструватися')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'after_logging.html';
                    });
                }
            });
            
            // Ultra-aggressive approach 
            document.querySelectorAll('button, input[type="submit"], .btn, .btn-primary, .submit-btn, [type="submit"]')
            .forEach(element => {
                console.log('Found potential submission button:', element);
                element.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Submission button clicked on sign_up2.html, navigating to after_logging.html');
                    window.location.href = 'after_logging.html';
                });
            });
            break;
            
        case 'sign_up11.html':
            // NEW FUNCTIONALITY: Handle volunteer registration
            console.log('Setting up handlers for sign_up11.html');
            
            // Ultra-aggressive approach for this page since it's problematic
            // Target any button or form submission element
            document.querySelectorAll('button, input[type="submit"], .btn, .btn-primary, .submit-btn, [type="submit"]')
            .forEach(element => {
                console.log('Found potential volunteer submission button:', element);
                element.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Submission button clicked on sign_up11.html, navigating to vol_cabinet.html');
                    window.location.href = 'vol_cabinet.html';
                });
            });
            
            // Direct document click handler for any button-like element
            document.addEventListener('click', function(e) {
                // Check if we're clicking anything that looks like a submit button
                const target = e.target;
                if (target.tagName === 'BUTTON' || 
                    (target.tagName === 'INPUT' && target.type === 'submit') ||
                    target.classList.contains('btn') ||
                    target.classList.contains('btn-primary') ||
                    (target.textContent && target.textContent.toLowerCase().includes('зареєструватися'))) {
                    
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Global click handler caught button click on sign_up11.html');
                    window.location.href = 'vol_cabinet.html';
                }
            });
            
            // Add form submission handler as fallback
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    console.log('Form submitted on sign_up11.html, navigating to vol_cabinet.html');
                    window.location.href = 'vol_cabinet.html';
                });
            });
            break;
            
        case 'after_logging.html':
            // Original implementation
            const createAdBtn = document.querySelector('.btn-primary');
            if (createAdBtn) {
                createAdBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'profile.html';
                });
            }
            
            const addShelterBtn = document.querySelector('.btn-secondary');
            if (addShelterBtn) {
                addShelterBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'cabinet.html';
                });
            }
            
            // More aggressive approach
            document.querySelectorAll('a, button, .btn').forEach(element => {
                if (element.textContent && element.textContent.includes('Створити оголошення')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'profile.html';
                    });
                }
                
                if (element.textContent && element.textContent.includes('Додати кабінет притулку')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'cabinet.html';
                    });
                }
            });
            break;
    }
    
    // Add debugging to help identify issues
    console.log('Navigation setup complete for page:', currentPage);
    
    // EXTREMELY DIRECT APPROACH FOR VOLUNTEER TOOLBAR NAVIGATION
    // Check if we're on any volunteer page
    if (['vol_cabinet.html', 'fave_animals.html', 'message.html', 'vol_search.html', 'hand_the_pet.html', 'pet_request.html'].includes(currentPage)) {
        console.log('On volunteer page, setting up toolbar handlers');
        
        // This is an extremely aggressive solution for toolbar navigation
        // Create invisible overlay buttons for each toolbar option
        const toolbarOptions = [
            { text: 'улюблені тварини', page: 'fave_animals.html' },
            { text: 'повідомлення', page: 'message.html' },
            { text: 'пошук тварин', page: 'vol_search.html' },
            { text: 'здати знайдену тварину', page: 'hand_the_pet.html' },
            { text: 'запит на тварину', page: 'pet_request.html' },
            { text: 'кабінет', page: 'vol_cabinet.html' }
        ];
        
        // Find all text on the page that matches our toolbar options
        let allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            if (!element.textContent) return;
            
            const text = element.textContent.trim().toLowerCase();
            
            // Check if this element contains any of our toolbar texts
            toolbarOptions.forEach(option => {
                if (text.includes(option.text)) {
                    console.log(`Found toolbar text "${option.text}" in element:`, element);
                    
                    // Get the element's position and size
                    const rect = element.getBoundingClientRect();
                    
                    // Create an overlay button
                    const overlayBtn = document.createElement('div');
                    overlayBtn.style.position = 'absolute';
                    overlayBtn.style.left = rect.left + 'px';
                    overlayBtn.style.top = rect.top + 'px';
                    overlayBtn.style.width = rect.width + 'px';
                    overlayBtn.style.height = rect.height + 'px';
                    overlayBtn.style.backgroundColor = 'transparent';
                    overlayBtn.style.zIndex = '10000';
                    overlayBtn.style.cursor = 'pointer';
                    
                    // Add click handler
                    overlayBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`Overlay button clicked for "${option.text}", navigating to ${option.page}`);
                        window.location.href = option.page;
                    });
                    
                    // Add to document
                    document.body.appendChild(overlayBtn);
                }
            });
        });
        
        // Also add direct click handlers on all elements
        document.addEventListener('click', function(e) {
            let element = e.target;
            let maxDepth = 5; // Check up to 5 levels of parent elements
            
            for (let i = 0; i < maxDepth; i++) {
                if (!element) break;
                
                if (element.textContent) {
                    const text = element.textContent.trim().toLowerCase();
                    
                    // Check against each toolbar option
                    toolbarOptions.forEach(option => {
                        if (text.includes(option.text)) {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log(`Click detected on "${option.text}", navigating to ${option.page}`);
                            window.location.href = option.page;
                        }
                    });
                }
                
                element = element.parentElement;
            }
        });
    }
});

// SEPARATE VOLUNTEER TOOLBAR NAVIGATION SCRIPT
// This runs in parallel to the main navigation script
(function() {
    // Helper function to get the current page
    function getCurrentPage() {
        const path = window.location.pathname;
        return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    }
    
    // Only run this on volunteer pages
    const volunteerPages = ['vol_cabinet.html', 'fave_animals.html', 'message.html', 'vol_search.html', 'hand_the_pet.html', 'pet_request.html'];
    const currentPage = getCurrentPage();
    
    if (!volunteerPages.includes(currentPage)) {
        return;
    }
    
    console.log('Running dedicated volunteer toolbar navigation script');
    
    // Define toolbar navigation mapping
    const toolbarNavigation = {
        'улюблені тварини': 'fave_animals.html',
        'повідомлення': 'message.html',
        'пошук тварин': 'vol_search.html',
        'здати знайдену тварину': 'hand_the_pet.html',
        'запит на тварину': 'pet_request.html',
        'кабінет': 'vol_cabinet.html'
    };
    
    // Function to set up navigation
    function setupToolbarNavigation() {
        // Force-add click handlers to EVERYTHING
        document.querySelectorAll('*').forEach(element => {
            if (!element.textContent) return;
            
            const text = element.textContent.trim().toLowerCase();
            
            // Check if this element contains any toolbar text
            for (const [navText, destination] of Object.entries(toolbarNavigation)) {
                if (text.includes(navText)) {
                    // Make clickable if not already
                    element.style.cursor = 'pointer';
                    
                    // Remove any existing click handlers
                    const newElement = element.cloneNode(true);
                    if (element.parentNode) {
                        element.parentNode.replaceChild(newElement, element);
                    }
                    
                    // Add click handler
                    newElement.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`Toolbar item clicked: "${navText}" -> ${destination}`);
                        window.location.href = destination;
                    });
                    
                    // Add to event debugging
                    console.log(`Added toolbar navigation: "${navText}" -> ${destination}`, newElement);
                    break;
                }
            }
        });
    }
    
    // Run setup on DOM ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setupToolbarNavigation();
    } else {
        document.addEventListener('DOMContentLoaded', setupToolbarNavigation);
    }
    
    // Also run it after a delay to catch dynamically loaded elements
    setTimeout(setupToolbarNavigation, 500);
    setTimeout(setupToolbarNavigation, 1500);
    
    // Add global click handler as final fallback
    document.addEventListener('click', function(e) {
        let element = e.target;
        let maxDepth = 5;
        
        for (let i = 0; i < maxDepth; i++) {
            if (!element) break;
            
            if (element.textContent) {
                const text = element.textContent.trim().toLowerCase();
                
                for (const [navText, destination] of Object.entries(toolbarNavigation)) {
                    if (text.includes(navText)) {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`Global click handler caught toolbar click: "${navText}" -> ${destination}`);
                        window.location.href = destination;
                        return;
                    }
                }
            }
            
            element = element.parentElement;
        }
    });
})();