let search = document.querySelector('.search-box');

document.querySelector('#search-icon').oneclick = () => {
    search.classList.toggle('active');
}


let navbar = document.querySelector('.navbar')

document.querySelector('#menu-icon').oneclick = () => {
    navbar.classList.toggle('active');
}






let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})