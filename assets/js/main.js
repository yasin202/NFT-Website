let navContainer = document.getElementById('nav-container')
let navLinks = document.querySelector('.nav__links')
let phoneMenuOpen = document.querySelector('.phone-open')
let phoneMenuClose = document.querySelector('.phone-close')


function scrollHandler() {
    if (document.documentElement.scrollTop > 3) {
        navContainer.classList.remove('nav__container')
        navContainer.classList.add('nav__container-onscroll')
        navContainer.firstElementChild.classList.add('header__logo')
    } else {
        navContainer.classList.remove('nav__container-onscroll')
        navContainer.classList.add('nav__container')
        navContainer.firstElementChild.classList.remove('header__logo')
    }
}
function hamburgerMenu() {
    phoneMenuOpen.style.display = 'none'
    phoneMenuClose.style.display = 'block'
    navLinks.style.display = 'block'
}

function x() {
    phoneMenuClose.style.display = 'none'
    phoneMenuOpen.style.display = 'block'
    navLinks.style.display = 'none'
}


document.addEventListener('scroll', scrollHandler)
phoneMenuOpen.addEventListener('click', hamburgerMenu )
phoneMenuClose.addEventListener('click', x )

