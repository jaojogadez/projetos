// Script for mobile navbar 

function showSlidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// First script for fixed navbar (not work)

window.addEventListener("scroll", function(){
    let nav = document.querySelector('.header')
    nav.classList.toggle('animation-saindo',window.scrollY < 130)
});

// Second script for fixed navbar 
window.addEventListener('scroll', function() {
    var header = document.querySelector('.menu--movel');
    var scrollTop = window.scrollY;

    if (scrollTop > 130) {
        header.classList.add('menu--show');
    } else {
        header.classList.remove('menu--show');
    };
    });































