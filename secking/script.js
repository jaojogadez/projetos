// Script for mobile navbar 

function showSlidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// First script for fixed navbar 

window.addEventListener("scroll", function(){
    let nav = document.querySelector('.header')
    nav.classList.toggle('animation-saindo',window.scrollY < 130)
});

// Second script for fixed navbar 

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollTop = window.scrollY;
    var navbarfixa = document.querySelector('#navbar-fixo-ontop')

    if (scrollTop > 130) {
        header.classList.add('fixed-menu');
        header.style.display="block"
    } else {
        header.classList.remove('fixed-menu');
        header.style.display="none";
    }
    

});































