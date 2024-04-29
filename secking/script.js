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
    let nav = document.querySelector('#navbar')
    nav.classList.toggle('rolagem',window.scrollY > 0)
});

// Second script for fixed navbar 

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
    var scrollTop = window.scrollY;

    if (scrollTop > 130) {
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
    if (scrollTop < 130){
        header.style.display="none"
    }
    else{
        header.style.display="block"
    }
});
























