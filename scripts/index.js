const mobileMenuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    // const isAsideClosed = aside.classlist.contains('inactive');

    // if (!isAsideClosed) {
    //     aside.classlist.add('inactive');
    // }

    mobileMenu.classList.toggle('inactive');
}