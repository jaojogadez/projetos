// Script for mobile navbar 

function showSlidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
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

// Script para os links ativos  não funcionou ;_;

let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.activeLink');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id');

        if(top >= offset && top < offset + heightSection){
            links.forEach(links => {
                links.classList.remove('active');

                document.querySelector(idSection).classList.add('active');
            });
        };
    });
});


// Scroll Reveal

window.sr = ScrollReveal({reset: true });

sr.reveal('.animation-one', { duration: 1000});























