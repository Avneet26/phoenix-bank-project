var mobileButton = document.querySelector('.mobile-menu-button');
var mobileNavContainer = document.querySelector('.mobile-nav-container');
var mobileButtonContainer = document.querySelector('.mobile-menu-button');

mobileButton.addEventListener('click', function() {
    mobileButtonContainer.classList.toggle('close');
    mobileNavContainer.classList.toggle('close');
});