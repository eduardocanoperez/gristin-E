const mobileMenuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileCarIcon = document.querySelector('.shopingcar-icon');
const mobilecar = document.querySelector('.shopingcar-menu');

mobileMenuIcon.addEventListener('click', toggleMobileMenu);
mobileCarIcon.addEventListener('click', toggleMobileCar);

function toggleMobileMenu() {
    // const isAsideClosed = aside.classlist.contains('inactive');

    // if (!isAsideClosed) {
    //     aside.classlist.add('inactive');
    // }

    mobileMenu.classList.toggle('inactive');
}

function toggleMobileCar() {
    
    mobilecar.classList.toggle('inactive')
}