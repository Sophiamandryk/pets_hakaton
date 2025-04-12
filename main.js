// main.js - Improved navigation handler for Ukrainian animal shelter website

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
            document.querySelectorAll('a, button, .btn').forEach(element => {
                if (element.textContent.trim() === 'Увійти') {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'log_in.html';
                    });
                }
                // Handle "Зареєструватися" button
                if (element.textContent.trim() === 'Зареєструватися') {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'sign_up1.html';
                    });
                }
            });
            break;
            
        case 'sign_up1.html':
            // More aggressive approach to find and handle "притулок" button
            // This targets any element that could be clickable and contains the word "притулок"
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
            
            // Also add global click handler as a fallback
            document.addEventListener('click', function(e) {
                const clickedElement = e.target;
                if (clickedElement.textContent && clickedElement.textContent.toLowerCase().includes('притулок')) {
                    e.preventDefault();
                    console.log('Global click handler caught притулок click');
                    window.location.href = 'sign_up2.html';
                }
            });
            break;
            
        case 'sign_up2.html':
            // Handle "зареєструватися" button with improved targeting
            document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('зареєструватися')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'after_logging.html';
                    });
                }
            });
            break;
            
        case 'after_logging.html':
            // Handle "створити оголошення" button
            document.querySelectorAll('a, button, .btn').forEach(element => {
                if (element.textContent && element.textContent.includes('Створити оголошення')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'profile.html';
                    });
                }
                
                // Handle "додати кабінет притулку" button
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
});

// main.js - Navigation handler for Ukrainian animal shelter website

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
            break;
            
        case 'sign_up1.html':
            // Handle "Притулок" button
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
            
            // Handle "Волонтер" button
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
            break;
            
        case 'sign_up2.html':
            // Handle "зареєструватися" button
            const registerBtns = document.querySelectorAll('button, .btn-submit');
            registerBtns.forEach(button => {
                if (button.textContent && button.textContent.toLowerCase().includes('зареєструватися')) {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'after_logging.html';
                    });
                }
            });
            break;
            
        case 'after_logging.html':
            // Handle "створити оголошення" button
            const createAdBtn = document.querySelector('.btn-primary');
            if (createAdBtn) {
                createAdBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'profile.html';
                });
            }
            
            // Handle "додати кабінет притулку" button
            const addShelterBtn = document.querySelector('.btn-secondary');
            if (addShelterBtn) {
                addShelterBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'cabinet.html';
                });
            }
            break;
    }
    
    console.log('Navigation setup complete for page:', currentPage);
});