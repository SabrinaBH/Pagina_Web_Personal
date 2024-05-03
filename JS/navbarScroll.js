const nav = document.querySelector('.navbar');
const navCollapse = document.querySelector('.collapse');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 56){
        nav.classList.add('navbar-scrolled');
        navCollapse.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        nav.classList.remove('navbar-scrolled');
        navCollapse.classList.remove('navbar-scrolled');
    }
});