const mobileMenuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileCarIcon = document.querySelector('.shopingcar-icon');
const mobileCar = document.querySelector('.shopingcar-menu');

mobileMenuIcon.addEventListener('click', toggleMobileMenu);
mobileCarIcon.addEventListener('click', toggleMobileCar);

function toggleMobileMenu() {
    const isMobileCarClosed = mobileCar.classList.contains('inactive');
    if(!isMobileCarClosed) {
        mobileCar.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleMobileCar() { 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    mobileCar.classList.toggle('inactive');
}