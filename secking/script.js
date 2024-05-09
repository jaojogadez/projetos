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



// Scroll Reveal

window.sr = ScrollReveal({reset: true });

sr.reveal('.active-content-link', { duration: 1000});


// Mensagem do botão

function alerta(){
    window.alert('Sua mensagem foi enviada com sucesso! Aguarde a respota em 24 horas.')
}




















