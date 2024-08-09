function expandir1(){
    var element = document.getElementById('p1')
    element.style.display = 'flex'
}
function voltar1(){
    var element = document.getElementById('p1')
    element.style.display = 'none'
}

function expandir2(){
    var element = document.getElementById('p2')
    element.style.display = 'block'
}
function voltar2(){
    var element = document.getElementById('p2')
    element.style.display = 'none'
}

function expandir3(){
    var element = document.getElementById('p3')
    element.style.display = 'block'
}
function voltar3(){
    var element = document.getElementById('p3')
    element.style.display = 'none'
}

function expandir4(){
    var element = document.getElementById('p4')
    element.style.display = 'block'
}
function voltar4(){
    var element = document.getElementById('p4')
    element.style.display = 'none'
}
window.addEventListener('scroll', function() {
var header = document.querySelector('.menu--movel');
var scrollTop = window.scrollY;

    if (scrollTop > 70) {
        header.classList.add('menu--show');
    } else {
        header.classList.remove('menu--show');
    };
});