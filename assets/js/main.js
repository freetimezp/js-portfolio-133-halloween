//show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    });
}


//remove menu mobile
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(n => n.addEventListener('click', linkAction));


//atropos
const myAtropos = Atropos({
    el: ".home__images",
    shadow: false,
    highlight: false,
})


//shadow header on scroll
const shadowScroll = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("shadow-scroll")
        : header.classList.remove("shadow-scroll");
};

window.addEventListener('scroll', shadowScroll);







