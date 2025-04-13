// main.js - Comprehensive navigation handler for Ukrainian animal shelter website

document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    console.log('Current page:', currentPage);
    
    // Handle global navigation for any page
    setupGlobalNavigation();
    
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
            
            // More aggressive approach for buttons with specific text
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
            
        case 'log_in.html':
            // Handle "Зареєструватися" links/buttons
            document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('зареєструватися')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('Зареєструватися clicked, navigating to sign_up1.html');
                        window.location.href = 'sign_up1.html';
                    });
                }
            });
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
            
            // More aggressive approach as fallback
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
                
                if (element.textContent && element.textContent.toLowerCase().includes('волонтер')) {
                    console.log('Found волонтер element:', element);
                    
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('волонтер clicked, navigating to sign_up11.html');
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
            
            // Handle "волонтер" button to switch to volunteer registration
            document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('волонтер')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('волонтер clicked on sign_up2, navigating to sign_up11.html');
                        window.location.href = 'sign_up11.html';
                    });
                }
            });
            
            // Additional fallback for register button
            document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('зареєструватися')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.href = 'after_logging.html';
                    });
                }
            });
            break;
            
        case 'sign_up11.html':
            // Handle "зареєструватися" button for volunteer
            const volRegisterBtns = document.querySelectorAll('button, .btn-submit, a, .btn, [role="button"], input[type="button"], input[type="submit"]');
            volRegisterBtns.forEach(button => {
                if (button.textContent && button.textContent.toLowerCase().includes('зареєструватися')) {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('зареєструватися button clicked in sign_up11, navigating to vol_cabinet.html');
                        window.location.href = 'vol_cabinet.html';
                    });
                }
            });
            
            // Handle "притулок" button to switch to shelter registration
            document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('притулок')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('притулок clicked on sign_up11, navigating to sign_up2.html');
                        window.location.href = 'sign_up2.html';
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
            
            // More aggressive approach for buttons
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
            
        case 'cabinet.html':
            // Handle "створити кабінет притулку" button
            const createShelterBtn = document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]');
            createShelterBtn.forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('створити кабінет притулку')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('створити кабінет притулку clicked, navigating to after_logging.html');
                        window.location.href = 'after_logging.html';
                    });
                }
            });
            break;
            
        case 'make_request.html':
            // Handle "створити оголошення" button
            const createAdRequestBtn = document.querySelectorAll('a, button, .btn, [role="button"], input[type="button"], input[type="submit"]');
            createAdRequestBtn.forEach(element => {
                if (element.textContent && element.textContent.toLowerCase().includes('створити оголошення')) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('створити оголошення clicked, navigating to profile.html');
                        window.location.href = 'profile.html';
                    });
                }
            });
            break;
            
        case 'vol_cabinet.html':
        case 'fave_animals.html':
        case 'message.html':
        case 'vol_search.html':
        case 'hand_the_pet.html':
        case 'pet_request.html':
            // Handle volunteer toolbar navigation
            setupVolunteerToolbarNavigation();
            break;
    }
    
    console.log('Navigation setup complete for page:', currentPage);
});

// Function to set up volunteer toolbar navigation
function setupVolunteerToolbarNavigation() {
    // Handle "мій профіль" navigation
    const profileLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    profileLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('мій профіль')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('мій профіль clicked, navigating to vol_cabinet.html');
                window.location.href = 'vol_cabinet.html';
            });
        }
    });
    
    // Handle "улюблені тварини" navigation
    const faveAnimalsLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    faveAnimalsLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('улюблені тварини')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('улюблені тварини clicked, navigating to fave_animals.html');
                window.location.href = 'fave_animals.html';
            });
        }
    });
    
    // Handle "повідомлення" navigation
    const messageLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    messageLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('повідомлення')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('повідомлення clicked, navigating to message.html');
                window.location.href = 'message.html';
            });
        }
    });
    
    // Handle "пошук тварин" navigation
    const searchLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    searchLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('пошук тварин')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('пошук тварин clicked, navigating to vol_search.html');
                window.location.href = 'vol_search.html';
            });
        }
    });
    
    // Handle "здати знайдену тварину" navigation
    const handPetLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    handPetLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('здати знайдену тварину')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('здати знайдену тварину clicked, navigating to hand_the_pet.html');
                window.location.href = 'hand_the_pet.html';
            });
        }
    });
    
    // Handle "запит на тварину" navigation
    const petRequestLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    petRequestLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('запит на тварину')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('запит на тварину clicked, navigating to pet_request.html');
                window.location.href = 'pet_request.html';
            });
        }
    });
    
    // Handle "кабінет" navigation to return to main volunteer cabinet
    const cabinetLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .toolbar-item');
    cabinetLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('кабінет')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('кабінет clicked, navigating to vol_cabinet.html');
                window.location.href = 'vol_cabinet.html';
            });
        }
    });
}

// Function to set up global navigation for all pages
function setupGlobalNavigation() {
    // Handle "головна" navigation
    const homeLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .header-link');
    homeLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('головна')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('головна clicked, navigating to index.html');
                window.location.href = 'index.html';
            });
        }
    });
    
    // Handle "про нас" navigation
    const aboutLinks = document.querySelectorAll('a, button, .btn, [role="button"], .nav-item, .header-link');
    aboutLinks.forEach(element => {
        if (element.textContent && element.textContent.toLowerCase().includes('про нас')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('про нас clicked, navigating to index.html');
                window.location.href = 'index.html';
            });
        }
    });
}